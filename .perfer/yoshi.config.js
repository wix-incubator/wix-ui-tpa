const path = require('path');
const fs = require('fs');

const ROOT_DIR = process.cwd();
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);

const componentsToBundle = require(resolvePath('../.wuf/components.json'));

const components = Object.keys(componentsToBundle).reduce(
  (accu, component) => {
      const filePath = componentsToBundle[component].path.replace(
          'src/',
          '../dist/es/src/'
      );
      const perfFolder = resolvePath(filePath, 'perf');
      const hasExtendedTests = fs.existsSync(perfFolder);
      let extendedFiles = {};

      if (hasExtendedTests) {
        extendedFiles = fs.readdirSync(perfFolder).reduce((acc, fileName) => {
          const isJsFile = fileName.endsWith('js');
          let nameSuffix = fileName.replace(new RegExp(`${component}|\.js`, 'gi'), '');

          return {
            ...acc,
            ...(isJsFile ? {[`${component}Perf${nameSuffix}`]: `../${filePath}/perf/${fileName}`} : {})
          }
        }, {});
      }

      return {
          ...accu,
          [component]: `../${filePath}/index`,
          ...extendedFiles,
      }
  },
  {}
);

console.log('adler', 'yoshi.config.js:41', components);

module.exports = {
  entry: {
    ...components,
  },
  externals: {
    react: 'react',
    'react-dom': 'reactDOM',
    'prop-types': 'propTypes',
    'react-is': 'react-is',
  },
};
