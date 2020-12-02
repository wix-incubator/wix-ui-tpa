const path = require('path');
const {run} = require('./create-components-entries');

const componentsFolder = 'components';
const entryPath = path.join(process.cwd(), componentsFolder);

console.log('Creating components entry files');
(async () => {
  await run({entryPath})
  console.log('Done!');
})();
