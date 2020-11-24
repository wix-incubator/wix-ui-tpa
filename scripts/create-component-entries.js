const {run} = require('./create-components-entries');

console.log('Creating components entry files');
(async () => {
  await run()
  console.log('Done!');
})();