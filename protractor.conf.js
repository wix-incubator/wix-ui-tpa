const {
  baseProtractorConfig
} = require("wix-ui-test-utils/dist/src/protractor/protractor.conf");

exports.config = {
  ...baseProtractorConfig,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 360000
  },
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      prefs: {
        "profile.content_settings.exceptions.clipboard": {
          "http://localhost:6006,*": { last_modified: Date.now(), setting: 1 }
        }
      }
    }
  }
};
