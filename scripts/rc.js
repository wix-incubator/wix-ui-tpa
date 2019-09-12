const child_process = require('child_process');
const logger = require('./logger');

const spawnSync = child_process.spawnSync;
const spawn = child_process.spawnSync;

function eject(msg, code = 1) {
  logger.error(msg, '\n');
  process.exit(code);
}

function throwIfNotMaster() {
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

function runStandardVersion() {
  try {
    spawn('standard-version', process.argv.slice(2), {
      stdio: 'inherit',
    });
  } catch (e) {}
}

function run() {
  throwIfNotMaster();
  runStandardVersion();
}

run();
