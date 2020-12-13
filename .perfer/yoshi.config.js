const path = require('path');

const ROOT_DIR = process.cwd();
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);

const componentsToBundle = require(resolvePath('../.wuf/components.json'));

// TODO: fix the import issues of the excluded components
const excludedComponents = ['AddItem'];
const components = Object.keys(componentsToBundle)
  .filter((component) => !excludedComponents.includes(component))
  .reduce(
    (accu, component) => ({
      ...accu,
      [component]: `${componentsToBundle[component].path.replace(
        'src/',
        '../../dist/es/src/'
      )}/index`,
    }),
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
