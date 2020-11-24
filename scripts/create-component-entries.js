const {run} = require('./create-components-entries');
const componentsFolder = 'components';

console.log('Creating components entry files');
(async () => {
  await run({componentsFolder})
  console.log('Done!');
})();