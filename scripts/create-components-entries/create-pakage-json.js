const path = require('path');
const {commonJsPath, esmPath} = require('./common');

const camelToKebab = string => string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

module.exports.createJsonContent = ({compName, compPath}) => ({
  name: camelToKebab(compName),
  main: path.join(commonJsPath({compPath}), 'index.js'),
  module: path.join(esmPath({compPath}), 'index.js'),
  typings: path.join(commonJsPath({compPath}), 'index.d.ts'),
  browser: {
    './index.st.css': './index.es.st.css',
    './index.js': path.join(esmPath({compPath}), 'index.js'),
  },
});