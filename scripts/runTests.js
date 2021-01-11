const { spawn } = require('child_process');
const readline = require('readline');
const packageJson = require('../package.json');
const chalk = require('chalk');
require('draftlog').into(console).addLineListener(process.stdin);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const { IS_BUILD_AGENT } = process.env;

const stdouts = {};
const stderrs = {};
const errors = {};
const spawns = [];

console.clear();

(async () => {
  await runTests();
})()

async function runTests() {
  const tests = Object.keys(packageJson.scripts).filter(scriptName => scriptName.indexOf('test:') === 0 && scriptName.indexOf(':watch') === -1);
  let processCount = tests.length;
  let timer;
  console.log(`Running ${processCount} tests:\n`)

  tests.forEach((script, index) => {
    const prefix = `${index + 1}. ${script}`;
    const logger = console.draft(chalk.yellow(prefix), chalk.yellow('running...'));

    const startTime = Date.now();
    const spawned = spawn('npm', ['run', script]);
    spawns.push(spawned);

    spawned.stdout.on('data', (data) => {
      stdouts[script] = `${stdouts[script] || ''}${data}`;
    });

    spawned.stderr.on('data', (data) => {
      stdouts[script] = `${stdouts[script] || ''}${data}`;
      stderrs[script] = `${stderrs[script] || ''}${data}`;
    });

    spawned.on('close', async (code) => {
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
        await finalize(tests);
      }
    });
  });

  process.on('SIGINT', function() {
    spawns.forEach(spawned => spawned.kill('SIGINT'));
    process.exit();
  });

  process.on('SIGTERM', function() {
    spawns.forEach(spawned => spawned.kill('SIGTERM'));
    process.exit();
  });

  if (!IS_BUILD_AGENT) {
    let counter = 0;
    let workingChars = ['\\', '|', '/', '-'];
    const workingLog = console.draft(chalk.yellow(workingChars[counter]));
    timer = setInterval(() => {
      workingLog(workingChars[counter++ % workingChars.length]);
    }, 500);
  }
}

function printAllLogs (tests) {
  tests.filter(script => !errors[script]).forEach(script => {
    if (IS_BUILD_AGENT) {
      console.log(`##teamcity[blockOpened name='${script}']`);
    }
    console.log(stdouts[script]);
    if (IS_BUILD_AGENT) {
      console.log(`##teamcity[blockClosed name='${script}']`);
    }
  });
}

async function shouldPrintErrors (tests, errorScripts) {
  const numOfErrors = errorScripts.length;
  return new Promise(resolve => {
    rl.question(
      `Which of the following test failures would you like to print [1 - ${numOfErrors}]?
        ${errorScripts.map((script, index) => {
        return `${index}. ${script}`;
      })}
        ${numOfErrors + 1}. print all tests
        ${numOfErrors + 2}. exit
        `, answer => {
        const answerIndex = parseInt(answer);
        const scriptToLog = errorScripts[answerIndex];
        if (scriptToLog) {
          console.log(stderrs[scriptToLog]);
          return shouldPrintErrors(tests, errorScripts);
        } else if (answerIndex === numOfErrors + 1) {
          printAllLogs(tests);
        }
        resolve();
      });

  });
}

async function finalize (tests) {
  const errorScripts = Object.keys(errors);
  const numOfErrors = errorScripts.length;

  if (!numOfErrors) {
    console.log(chalk.green('All tests passed successfully!'));

    if (!IS_BUILD_AGENT) {
      rl.question('Print all output? [y/N] ', answer => {
        if (answer !== 'y' && answer !== 'Y') {
          printAllLogs(tests);
        }
      });
    }
  }

  if (IS_BUILD_AGENT) {
    printAllLogs(tests);
  }

  if (numOfErrors) {
    if (!IS_BUILD_AGENT) {
      await shouldPrintErrors(tests, errorScripts);
    } else {
      Object.keys(errors).forEach(script => {
        if (IS_BUILD_AGENT) {
          console.log(`##teamcity[blockOpened name='${script}']`);
        }
        console.log(stderrs[script]);
        if (IS_BUILD_AGENT) {
          console.log(`##teamcity[blockClosed name='${script}']`);
        }
      })
    }
    const errorCodes = Object.keys(errors);

    rl.close();

    if (errorCodes.length) {
      process.exit(errorCodes[errorCodes.length - 1]);
    }
  }
}
