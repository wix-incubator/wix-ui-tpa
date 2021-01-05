const merge = require('lodash/merge');
const applitoolsConfig = require('storybook-snapper/config/applitools.config');

let privateConfig = {};
try {
  privateConfig = require('./applitools.private.config.js');
} catch (e) {}

module.exports = applitoolsConfig({
  config: merge(privateConfig, {
    concurrency: 50,
    browser: { name: 'chrome-one-version-back', width: 800, height: 600 }
  }),
});
