import { configure, addParameters } from '@storybook/react';
import styleProcessor from 'wix-style-processor';
import { storySort } from './utils';

function loadStories() {
  require('../stories');
  require('../mocks');
  require('./stories.scss');
  setTimeout(() => {
    styleProcessor.init();
  });
}

function configureStorybook() {
  configure(loadStories, module);
}

addParameters({
  options: {
    name: 'wix-ui-tpa',
    url: 'https://github.com/wix/wix-ui-tpa',
    storySort,
  },
});

configureStorybook();

if (module.hot) {
  module.hot.accept('../stories', () => {
    configureStorybook();
  });
}
