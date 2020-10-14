const { resolveNamespaceFactory } = require('@stylable/node');
const project = require('yoshi-config');
require('yoshi-common/build/require-hooks').setupRequireHooks();
require('yoshi-runtime').wixCssModulesRequireHook('./src');
require('@babel/register')({
  presets: [[require.resolve('babel-preset-yoshi')]],
});

require('@stylable/node').attachHook({
  stylableConfig: {
    resolveNamespace: resolveNamespaceFactory(project.name),
  },
});
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
    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
    svgoConfig: {
      plugins: {
        removeViewBox: false,
      },
    },
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
    default: svgFilename,
    ReactComponent: component,
  };
}
