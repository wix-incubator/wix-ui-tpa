const { spawn } = require('child_process');
const { get } = require('axios');

async function getBaselineBranchName(githubToken, branch) {
  let branchName = 'master';
  let baselineBranchName;
  const pullRequestNumberMatches = branch
    ? /^(\d*)\/(?:head|merge)$/.exec(branch)
    : null;
  const pullRequestNumber = pullRequestNumberMatches
    ? pullRequestNumberMatches[1]
    : null;

  if (pullRequestNumber && githubToken) {
    const { data: prInfo } = await get(
      `https://api.github.com/repos/wix/wix-ui-tpa/pulls/${pullRequestNumber}`,
      {
        auth: {
          password: githubToken,
        },
      },
    );

    if (prInfo) {
      if (prInfo.head) {
        branchName = prInfo.head.ref;
      }
      if (prInfo.base) {
        baselineBranchName = prInfo.base.ref;
      }
    }
  }

  return { branchName, baselineBranchName };
}

async function runCommand({ command, args, cwd, env }) {
  return new Promise((resolve, reject) => {
    spawn(command, args, {
      cwd,
      env,
      stdio: 'inherit',
    })
      .on('close', exitCode => {
        exitCode === 0
          ? resolve({ exitCode })
          : reject(
              new Error(
                `${command} ${args.join(
                  ' ',
                )} failed with exitCode: ${exitCode}`,
              ),
            );
      })
      .on('error', (exitCode, signal) => {
        reject(
          new Error(
            `${command} ${args.join(
              ' ',
            )} failed with exitCode: ${exitCode} signal: ${signal}`,
          ),
        );
      });
  });
}

async function runEyesStorybook(githubToken, branch) {
  const { branchName, baselineBranchName } = await getBaselineBranchName(
    githubToken,
    branch,
  );

  const env = {
    ...process.env,
    TPA_BRANCH_NAME: branchName,
  };

  if (baselineBranchName) {
    env.TPA_BASELINE_BRANCH_NAME = baselineBranchName;
  }

  console.info(
    `Running eyes-storybook with branch: ${branchName}, baseline branch: ${baselineBranchName}`,
  );

  return runCommand({
    command: 'npm',
    args: ['run', 'test:eyes-storybook:local'],
    env,
  });
}

(async function main(githubToken, branch) {
  try {
    if (!githubToken) {
      throw Error("Couldn't find github token");
    }
    if (process.env.EYES_API_KEY) {
      await runEyesStorybook(githubToken, branch);
    } else {
      console.log('Not a build agent. Not running');
    }
  } catch (ex) {
    console.error(ex);
    process.exit(1);
  }
})(process.env.github_token, process.env.BRANCH);
