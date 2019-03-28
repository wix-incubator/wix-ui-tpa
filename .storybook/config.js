import {configure, addParameters} from '@storybook/react';

function loadStories() {
  require('../stories');
  require('../mocks');
  require('./stories.scss');
}

addParameters({
  options: {
    name: 'wix-ui-tpa',
    url: 'https://github.com/wix-private/wix-ui-tpa',
    showAddonPanel: false,
  }
});

configure(loadStories, module);
