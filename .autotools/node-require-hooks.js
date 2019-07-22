require('yoshi-helpers/require-hooks').setupRequireHooks();
require('@stylable/node').attachHook();
const path = require('path');
const fs = require('fs');
const svgr = require('@svgr/core');
const babelCore = require('@babel/core');

require.extensions['.svg'] = mockSvg;

function mockSvg(module) {
  const filePathName = path.basename(module.filename);
  const svgFilename = JSON.stringify(filePathName);
  const svgContent = fs.readFileSync(module.filename, 'utf8');
  const parsedSvg = svgr.default.sync(svgContent, {
    plugins: ['@svgr/plugin-jsx'],
  });
  const parsed = babelCore.transform(parsedSvg, {
    plugins: [
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-transform-modules-commonjs',
    ],
  });
  // tslint:disable-next-line:no-eval
  const component = eval(parsed.code);

  module.exports = {
    __esModule: true,
    default: svgFilename,
    ReactComponent: component,
  };
}
