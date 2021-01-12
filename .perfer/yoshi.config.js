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
      const extendedFilePath = `${filePath}/docs/${component}WiringExample.js`;
      const hasExtendedComponent = fs.existsSync(path.resolve(__dirname, extendedFilePath));
      const extendedComponent = hasExtendedComponent ? { [`${component}Extended`]: `../${extendedFilePath}` } : {};

      return ({
          ...accu,
          [component]: `../${filePath}/index`,
          ...extendedComponent,
      })
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
