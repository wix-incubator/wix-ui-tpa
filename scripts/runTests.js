const { spawn } = require('child_process');
const readline = require('readline');
const packageJson = require('../package.json');
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
    const logger = console.draft(prefix, `running${ellipsis}`);
    const interval = setInterval(() => {
      ellipsisCount = (ellipsisCount + 1) % 4;
      logger(prefix, `running${ellipsis.substr(0, ellipsisCount)}`);
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
        logger(prefix, `failed after ${endTime} with code ${code}`);
      } else {
        logger(prefix, `successfully ended after ${endTime}`);
      }

      if (processCount === 0) {
        finalize(tests);
      }
    });
  });
}

function finalize (tests) {
  console.log('Summary:');
  tests.filter(script => !errors[script]).forEach(script => {
    console.log(script);
    console.log(stdouts[script]);
  })
  Object.keys(errors).forEach(script => {
    console.log(script);
    console.log(stderrs[script]);
  })
  const errorCodes = Object.keys(errors);

  if (errorCodes.length) {
    process.exit(errorCodes[errorCodes.length - 1]);
  }
}
