const child_process = require('child_process');
const logger = require('./logger');

const spawnSync = child_process.spawnSync;

function throwIfNotMaster() {
    spawnSync('');
}

function run() {
  throwIfNotMaster();
}

run();
