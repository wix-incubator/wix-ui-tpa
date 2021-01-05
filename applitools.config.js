const merge = require('lodash/merge');
const applitoolsConfig = require('storybook-snapper/config/applitools.config');

let privateConfig = {};
try {
  privateConfig = require('./applitools.private.config.js');
} catch (e) {}

module.exports = applitoolsConfig({
  config: merge(privateConfig, {
    concurrency: 50,
    browser: { name: 'chrome-two-versions-back', width: 1024, height: 768 }
  }),
});
