const chalk = require('chalk');

function log(...args) {
  console.log(chalk.green(...args));
}

function error(...args) {
  console.log(chalk.red(...args));
}

function warn(...args) {
  console.log(chalk.yellow(...args));
}

module.exports = {
  log,
  error,
  warn,
};
