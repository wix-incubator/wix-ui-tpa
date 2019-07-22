const storybookConfig = require('../webpack.config.storybook');
const path = require('path');
const packagePath = path.resolve(__dirname, '..');

const config = {
  context: packagePath,
  mode: 'development',
  module: {},
  resolve: {
    extensions: [],
  },
};

module.exports = storybookConfig({ config });
