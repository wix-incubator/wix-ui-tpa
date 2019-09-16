const { execute } = require('./utils');
const logger = require('./logger');

function run() {
  if (process.env.IS_BUILD_AGENT) {
    try {
      let version = process.env.npm_package_version;
      version = `${version.startsWith('v') ? '' : 'v'}${version}`;

      execute(`git tag -a ${version} -m "wix-ui-tpa version ${version}"`, true);
      execute('git push --follow-tags', true);
    } catch (e) {
      logger.error("Couldn't add a tag");
    }
  } else {
    logger.warn('Not in a CI agent. Git tagging is skipped.');
  }
}

run();
