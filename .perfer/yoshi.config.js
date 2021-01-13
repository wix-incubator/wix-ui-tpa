const path = require('path');
const fs = require('fs');

const ROOT_DIR = process.cwd();
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);

const componentsToBundle = require(resolvePath('../.wuf/components.json'));

function getExtendedFilePath (component, filePath) {
    let extendedFilePathPrefix = `${filePath}/docs/${component}WiringExample.js`;
    let extendedFilePath = '';

    if (fs.existsSync(resolvePath(extendedFilePathPrefix))) {
        extendedFilePath = extendedFilePathPrefix;
    }

    return extendedFilePath;
}

const components = Object.keys(componentsToBundle).reduce(
  (accu, component) => {
      const filePath = componentsToBundle[component].path.replace(
          'src/',
          '../dist/es/src/'
      );
      const extendedFilePath = getExtendedFilePath(component, filePath);

      return {
          ...accu,
          [component]: `../${filePath}/index`,
          ...(extendedFilePath ? {
              [`${component}Extended`]: `../${extendedFilePath}`,
          } : {}),
      }
  },
  {}
);

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
