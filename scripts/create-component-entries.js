const fs = require('fs');
const util = require('util');
const path = require('path');
const components = require('../.wuf/components.json');
const componentsNames = Object.keys(components);

const entryPath = path.join(process.cwd(), 'components');

const exists = util.promisify(fs.exists);
const mkdir = util.promisify(fs.mkdir);
const rmdir = util.promisify(fs.rmdir);
const writeFile = util.promisify(fs.writeFile);
const symlink = util.promisify(fs.symlink);

const commonJsPath = ({compPath}) => `../dist/${compPath}`
const esmPath = ({compPath}) => `../dist/es/${compPath}`

const camelToKebab = string => string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const getPackageJson = ({compName, compPath}) => ({
  name: camelToKebab(compName),
  main: path.join(commonJsPath({compPath}), 'index.js'),
  module: path.join(esmPath({compPath}), 'index.js'),
  typings: path.join(commonJsPath({compPath}), 'index.d.ts'),
  browser: {
    './index.st.css': './index.es.st.css',
    './index.js': path.join(esmPath({compPath}), 'index.js'),
  },
});

const cleanup = async () => {
  /* clean existing folders */
  if(exists(entryPath)) {
    await rmdir(entryPath, {recursive: true});
  }
  await mkdir(entryPath, {});
}

const run = async() => {
  await cleanup()
  try {
    await Promise.all(componentsNames.map(async (compName) => {
      const entryFolderPath = path.join(entryPath, compName);
      const compPath = components[compName].path;
      
      /* 1. Create a folder per component */
      await mkdir(entryFolderPath, {});
      
      /* 2. Create the package.json template */
      await writeFile(path.join(entryFolderPath, 'package.json'), JSON.stringify(getPackageJson({compName, compPath}), null, 2));
      
      /* 3. Create the index.st.css and index.es.st.css files with symlinks to the folder dir */
      await symlink(path.join(commonJsPath({compPath}), `${compName}.st.css`), path.join(entryFolderPath, 'index.st.css'))
      await symlink(path.join(esmPath({compPath}), `${compName}.st.css`), path.join(entryFolderPath, 'index.es.st.css'))
    }));
  } catch (e) {
    console.error(e);
    cleanup();
  }
}

console.log('Creating components entry files');
(async () => {await run()})();