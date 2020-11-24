
const path = require('path');
const {exists, mkdir, rmdir, writeFile, symlink} = require('./fs-async')
const {commonJsPath, esmPath} = require('./common');
const {createJsonContent} = require('./create-pakage-json');

module.exports.run = async ({componentsFolder}) => {
  const components = require('../../.wuf/components.json');
  const componentsNames = Object.keys(components);
  const entryPath = path.join(process.cwd(), componentsFolder);

  const cleanup = async () => {
    /* clean existing folders */
    if(exists(entryPath)) {
      await rmdir(entryPath, {recursive: true});
    }
  }

  try {
    await cleanup()
    await mkdir(entryPath, {});
    await Promise.all(componentsNames.map(async (compName) => {
      const entryFolderPath = path.join(entryPath, compName);
      const compPath = components[compName].path;
      
      /* 1. Create a folder per component */
      await mkdir(entryFolderPath, {});
      
      /* 2. Create the package.json template */
      await writeFile(path.join(entryFolderPath, 'package.json'), JSON.stringify(createJsonContent({compName, compPath}), null, 2));
      
      /* 3. Create the index.st.css and index.es.st.css files with symlinks to the folder dir */
      await symlink(path.join(commonJsPath({compPath}), `${compName}.st.css`), path.join(entryFolderPath, 'index.st.css'))
      await symlink(path.join(esmPath({compPath}), `${compName}.st.css`), path.join(entryFolderPath, 'index.es.st.css'))
    }));
  } catch (e) {
    cleanup();
    console.log('Creating compoents entries failed...');
    console.error(e);
    throw e;
  }
}