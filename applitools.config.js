const merge = require('lodash/merge');
const applitoolsConfig = require('storybook-snapper/config/applitools.config');

let privateConfig = {};
try {
  privateConfig = require('./applitools.private.config.js');
} catch (e) {}

const branches = {};

if (process.env.IS_BUILD_AGENT) {
  if (process.env.VCS_BRANCH_NAME) {
    branches.branchName = process.env.VCS_BRANCH_NAME;
    branches.baselineBranchName = 'master';
  } else {
    branches.branchName = 'master';
  }
}

module.exports = applitoolsConfig({
  config: merge(privateConfig, {
    concurrency: 50,
  }, branches),
});
