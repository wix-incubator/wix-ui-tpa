const merge = require('lodash/merge');
const applitoolsConfig = require('storybook-snapper/config/applitools.config');

let privateConfig = {};
try {
  privateConfig = require('./applitools.private.config.js');
} catch (e) {}

console.log(
  'adler',
  'applitools.config.js:9',
  process.env.APPLITOOLS_SERVER_URL,
);

const finalConfig = applitoolsConfig({
  config: merge(privateConfig, {
    serverUrl: process.env.APPLITOOLS_SERVER_URL,
  }),
});

console.log('adler', 'applitools.config.js:21', finalConfig);

module.exports = finalConfig;
