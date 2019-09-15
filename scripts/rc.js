const child_process = require('child_process');
const logger = require('./logger');

const spawnSync = child_process.spawnSync;

function eject(msg, code = 1) {
  logger.error(msg, '\n');
  process.exit(code);
}

function execute(cmd, withLog) {
  const config = withLog
    ? {
        stdio: 'inherit',
      }
    : undefined;
  const cmdArr = cmd.split(/\s+/);
  return spawnSync(cmdArr[0], cmdArr.slice(1), config);
}

function throwIfNotCleanMaster() {
  let branchName = '';
  let isLocalDirty = false;

  try {
    const branchNameExec = execute('git rev-parse --abbrev-ref HEAD');
    branchName = branchNameExec.output[1].toString().trim();
  } catch (e) {
    logger.error(e);
  }

  if (branchName !== 'master') {
    eject('Must be on master branch to create a release candidate');
  }

  try {
    execute('git fetch');
  } catch (e) {
    eject(`Couldn't fetch master`);
  }

  try {
    isLocalDirty = execute('git diff @{upstream} --exit-code')
      .output[1].toString()
      .trim();
  } catch (e) {
    logger.error(e);
  }

  if (isLocalDirty) {
    eject('local master branch is not aligned to origin');
  }
}

function bumpVersion() {
  const versionArgs =
    process.argv.length > 2 ? process.argv.slice(2).join(' ') : 'patch';

  try {
    execute(`npm --no-git-tag-version commit ${versionArgs}`, true);
  } catch (e) {
    eject(`Failed to bump version ${e}`);
  }
}

function updateChangelog() {
  try {
    execute('conventional-changelog -i CHANGELOG.md -s', true);
  } catch (e) {
    eject(`standard-version failed with error\n ${e}`);
  }
}

function createReleaseBranch() {
  try {
    const newVersion = require('../package').version;
    execute(`git checkout -b release/${newVersion}`);
  } catch (e) {
    eject(`couldn't create release branch`);
  }
}

function run() {
  throwIfNotCleanMaster();
  bumpVersion();
  updateChangelog();
  createReleaseBranch();
  logger.log('\nRelease branch created successfully!\n');
}

run();
