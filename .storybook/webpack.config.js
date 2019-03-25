const merge = require('lodash/merge');
const path = require('path');
const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');

module.exports = ({config}) => {
  const newConfig = wixStorybookConfig(config);

  return merge(newConfig, {
    context: path.resolve(__dirname, '../src/components'),
    resolve: {
      alias: {
        'wix-ui-tpa': path.resolve(__dirname, '../src/components')
      },
    },
    module: {
      rules: newConfig.module.rules.concat({
        test: /\.story\.[j|t]sx?$/,
        loader: 'wix-storybook-utils/loader',

        options: {
          storyConfig: {
            moduleName: 'wix-ui-tpa',
            repoBaseURL: 'https://github.com/wix-private/wix-ui-tpa/tree/master/src/components/',
            importFormat: "import {%componentName} from '%moduleName/%componentName'"
          }
        }
      })
    }
  });
};
