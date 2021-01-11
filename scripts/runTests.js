const { spawn } = require('child_process');
const packageJson = require('../package.json');
const chalk = require('chalk');
require('draftlog').into(console).addLineListener(process.stdin)

const stdouts = {};
const stderrs = {};
const errors = {};

console.clear();

runTests();

function runTests() {
  const tests = Object.keys(packageJson.scripts).filter(scriptName => scriptName.indexOf('test:') === 0 && scriptName.indexOf(':watch') === -1);
  let processCount = tests.length;
  let timer;
  console.log(`Running ${processCount} tests:\n`)

  tests.forEach((script, index) => {
    const prefix = `${index + 1}. ${script}`;
    const logger = console.draft(chalk.yellow(prefix), chalk.yellow('running...'));

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
      const endTime = `${(Date.now() - startTime) / 1000.} seconds`;
      processCount -= 1;

      if (code !== 0) {
        errors[script] = code;
        logger(chalk.red(prefix), chalk.red(`failed after ${endTime} with code ${code}`));
      } else {
        logger(chalk.green(prefix), chalk.green(`successfully ended after ${endTime}`));
      }

      if (processCount === 0) {
        clearInterval(timer);
        finalize(tests);
      }
    });
  });

  if (!process.env.IS_BUILD_AGENT) {
    let counter = 0;
    let workingChars = ['\\', '|', '/', '-'];
    const workingLog = console.draft(chalk.yellow(workingChars[counter]));
    timer = setInterval(() => {
      workingLog(workingChars[counter++ % workingChars.length]);
    }, 500);
  }
}

function finalize (tests) {
  const numOfErrors = Object.keys(errors).length;

  if (!numOfErrors) {
    console.log(chalk.green('All tests passed successfully!'));
  }

  tests.filter(script => !errors[script]).forEach(script => {
    if (process.env.IS_BUILD_AGENT) {
      console.log(`##teamcity[blockOpened name='${script}']`);
    }
    console.log(stdouts[script]);
    if (process.env.IS_BUILD_AGENT) {
      console.log(`##teamcity[blockClosed name='${script}']`);
    }
  });

  if (numOfErrors) {
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
