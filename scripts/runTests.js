const packageJson = require('../package.json');
const { spawn } = require('child_process');

const stdouts = {};
const stderrs = {};
const errors = {};
const tests = Object.keys(packageJson.scripts).filter(scriptName => scriptName.indexOf('test:') === 0 && scriptName.indexOf(':watch') === -1);
let processCount = tests.length;

tests.forEach(script => {
  console.log(script);

  console.log('Running', script);
  console.log('===================');
  const startTime = Date.now();
  const spawned = spawn('npm', ['run', script]);

  spawned.stdout.on('data', (data) => {
    stdouts[script] = `${stdouts[script] || ''}${data}`;
  });

  spawned.stderr.on('data', (data) => {
    stderrs[script] = `${stderrs[script] || ''}${data}`;
  });

  spawned.on('close', (code) => {
    processCount -= 1;
    console.log('Script', script, 'ended', code === 0 ? 'successfully' : 'with an error', `by ${(Date.now() - startTime) / 1000.} seconds`);
    console.log('adler', 'runTests.js:29', processCount);
    if (code !== 0) {
      errors[script] = code;
    }

    if (processCount === 0) {
      finalize();
    }
  });
})

function finalize () {
  console.log('Finished running tests');
  console.log('Summary:');
  tests.filter(script => !errors[script]).forEach(script => {
    console.log(script);
    console.log(stdouts[script]);
  })
  Object.keys(stderrs).forEach(script => {
    console.log(script);
    console.log(stderrs[script]);
  })
  console.log('===================');
  const errorCodes = Object.keys(errors);

  if (errorCodes.length) {
    process.exit(errorCodes[errorCodes.length - 1]);
  }
}
