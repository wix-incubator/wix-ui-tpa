const logger = require('./logger');
const { eject, execute } = require('./utils');

function checkArgvs() {
  if (process.argv.length > 3) {
    eject(
      'Too many arguments were passed to the command.\nSee https://docs.npmjs.com/cli/version for options.',
    );
  }
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
  const versionArgs = process.argv[2] || 'patch';

  try {
    const versionExec = execute(`npm --no-git-tag-version version ${versionArgs}`);
    logger.log(`Bumping to ${versionArgs} version: ${versionExec.output[1].toString()}`);
  } catch (e) {
    eject(`Failed to bump version ${e}`);
  }
}

function updateChangelog() {
  try {
    execute('npm run changelog', true);
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
  checkArgvs();
  throwIfNotCleanMaster();
  bumpVersion();
  updateChangelog();
  createReleaseBranch();
  logger.log('\nRelease branch created successfully!\n');
}

run();
