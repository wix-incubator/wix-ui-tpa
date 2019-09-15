const child_process = require('child_process');
const logger = require('./logger');

const spawnSync = child_process.spawnSync;

function eject(msg, code = 1) {
  logger.error(msg, '\n');
  process.exit(code);
}

function throwIfNotCleanMaster() {
  let branchName = '';
  let isAhead = false;
  let isBehind = false;

  try {
    const branchNameExec = spawnSync('git', [
      'rev-parse',
      '--abbrev-ref',
      'HEAD',
    ]);
    branchName = branchNameExec.output[1].toString();
  } catch (e) {
    logger.error(e);
  }

  if (branchName !== 'master') {
    eject('Must be on master to create a release candidate');
  }

  try {
    isAhead = spawnSync('git', ['rev-list', 'origin..HEAD']);
    isBehind = spawnSync('git', ['rev-list', 'HEAD..origin']);
  } catch (e) {
    logger.error(e);
  }

  if (isAhead || isBehind) {
    eject('local master branch is not aligned to origin');
  }
}

function bumpVersion() {
  try {
    spawnSync('npm', ['version', ...process.argv.slice(2)], {
      stdio: 'inherit',
    });
  } catch (e) {
    eject(`Failed to bump version ${e}`);
  }
}

function updateChangelog() {
  try {
    spawnSync('conventional-changelog', ['-i', 'CHANGELOG.md', '-s'], {
      stdio: 'inherit',
    });
  } catch (e) {
    eject(`standard-version failed with error\n ${e}`);
  }
}

function createReleaseBranch() {
  try {
    const newVersion = require('../package').version;
    spawnSync('git', ['checkout', '-b', `release/${newVersion}`]);
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
