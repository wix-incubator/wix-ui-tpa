const chalk = require('chalk');
const ctxLogger = new chalk.Instance({level: 1});

function throwIfNotMaster() {}

function run() {
  throwIfNotMaster();
}

run();
