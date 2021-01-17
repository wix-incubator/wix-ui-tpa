const path = require('path');

const ROOT_DIR = process.cwd();
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);

const componentsToBundle = require(resolvePath('../.wuf/components.json'));

const components = Object.keys(componentsToBundle).reduce(
  (accu, component) => {
      const filePath = componentsToBundle[component].path.replace(
          'src/',
          '../dist/es/src/'
      );

      return {
          ...accu,
          [component]: `../${filePath}/perf/basic.js`,
          [`${component}Extended`]: `../${filePath}/perf/extended.js`,
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
