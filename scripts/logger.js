const chalk = require('chalk');

function log(...args) {
  console.log(chalk.green(...args));
}

function error() {
  console.log(chalk.red(...args));
}

module.exports = {
  log,
  error,
};
