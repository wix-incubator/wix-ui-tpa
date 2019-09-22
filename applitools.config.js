const merge = require('lodash/merge');
const applitoolsConfig = require('storybook-snapper/config/applitools.config');

let privateConfig = {};
try {
  privateConfig = require('./applitools.private.config.js');
} catch (e) {}

console.log('adler', 'applitools.config.js:9', process.env.APPLITOOLS_SERVER_URL);

module.exports = applitoolsConfig({ config: merge(privateConfig, { serverUrl: process.env.APPLITOOLS_SERVER_URL}) });
