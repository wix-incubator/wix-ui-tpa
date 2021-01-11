const { spawn } = require('child_process');
const readline = require('readline');
const packageJson = require('../package.json');
const chalk = require('chalk');
require('draftlog').into(console).addLineListener(process.stdin)

const stdouts = {};
const stderrs = {};
const errors = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createSingleTestLogger (dy, prefix = '', numberOfRows) {
  return (txt) => {
    readline.cursorTo(process.stdout, 0, dy + 2, () => {
      rl.write(`${prefix} ${txt}`);
      readline.cursorTo(process.stdout, 0, numberOfRows + 2);
    })
  }
}

console.clear();

runTests();

function runTests() {
  const tests = Object.keys(packageJson.scripts).filter(scriptName => scriptName.indexOf('test:') === 0 && scriptName.indexOf(':watch') === -1);
  let processCount = tests.length;
  console.log(`Running ${processCount} tests:\n`)

  tests.forEach((script, index) => {
    const prefix = `${index + 1}. ${script}`;
    const ellipsis = '...';
    let ellipsisCount = 0;
    const logger = console.draft(chalk.yellow(prefix), chalk.yellow(`running${ellipsis}`));
    const interval = setInterval(() => {
      ellipsisCount = (ellipsisCount + 1) % 4;
      logger(chalk.yellow(prefix), chalk.yellow(`running${ellipsis.substr(0, ellipsisCount)}`));
    }, 500);

    const startTime = Date.now();
    const spawned = spawn('npm', ['run', script]);

    spawned.stdout.on('data', (data) => {
      stdouts[script] = `${stdouts[script] || ''}${data}`;
    });

    spawned.stderr.on('data', (data) => {
      stdouts[script] = `${stdouts[script] || ''}${data}`;
      stderrs[script] = `${stderrs[script] || ''}${data}`;
    });

    spawned.on('close', (code) => {
      clearInterval(interval);
      const endTime = `${(Date.now() - startTime) / 1000.} seconds`;
      processCount -= 1;

      if (code !== 0) {
        errors[script] = code;
        logger(chalk.red(prefix), chalk.red(`failed after ${endTime} with code ${code}`));
      } else {
        logger(chalk.green(prefix), chalk.green(`successfully ended after ${endTime}`));
      }

      if (processCount === 0) {
        finalize(tests);
      }
    });
  });
}

function finalize (tests) {
  const numOfErrors = Object.keys(errors).length;

  if (!numOfErrors) {
    console.log(chalk.green('All tests passed successfully!'));
  } else {
    tests.filter(script => !errors[script]).forEach(script => {
      if (process.env.IS_BUILD_AGENT) {
        console.log(`##teamcity[blockOpened name='${script}']`);
      }
      console.log(stdouts[script]);
      if (process.env.IS_BUILD_AGENT) {
        console.log(`##teamcity[blockClosed name='${script}']`);
      }
    })
    Object.keys(errors).forEach(script => {
      if (process.env.IS_BUILD_AGENT) {
        console.log(`##teamcity[blockOpened name='${script}']`);
      }
      console.log(stderrs[script]);
      if (process.env.IS_BUILD_AGENT) {
        console.log(`##teamcity[blockClosed name='${script}']`);
      }
    })
    const errorCodes = Object.keys(errors);

    if (errorCodes.length) {
      process.exit(errorCodes[errorCodes.length - 1]);
    }
  }
}
