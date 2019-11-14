const { execute } = require('./utils');
const logger = require('./logger');

function run() {
  if (process.env.IS_BUILD_AGENT) {
    try {
      const version = process.env.npm_package_version;
      const tagName = `${version.startsWith('v') ? '' : 'v'}${version}`;
      console.log('adler', 'tag.js:9', version, tagName, `git tag -a ${tagName} -m "wix-ui-tpa version ${tagName}"`);

    //   execute(`git tag -a ${tagName} -m "wix-ui-tpa version ${tagName}"`, true);
    //   execute(`git push origin ${tagName}`, true);
    } catch (e) {
      logger.error("Couldn't add a tag", e);
    }
  } else {
    logger.warn('Not in a CI agent. Git tagging is skipped.');
  }
}

run();
