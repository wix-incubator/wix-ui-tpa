import {configure, addParameters} from '@storybook/react';
import styleProcessor from 'wix-style-processor';

function loadStories() {
  require('../stories');
  require('../mocks');
  require('./stories.scss');
  setTimeout(() => {
    styleProcessor.init();
  });
}

function configureStorybook () {
  configure(loadStories, module);
}

addParameters({
  options: {
    name: 'wix-ui-tpa',
    url: 'https://github.com/wix-private/wix-ui-tpa',
    showAddonPanel: false,
  }
});

configureStorybook();

if (module.hot) {
  module.hot.accept('../stories', () => {
    configureStorybook();
  });
}
