import {configure} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';

function loadStories() {
  require('../stories');
  require('../mocks');
  require('./stories.scss');
}

configure(loadStories, module);

setOptions({
  showDownPanel: false,
  name: 'wix-ui-tpa',
  url: 'https://github.com/wix/wix-ui-tpa',
  sidebarAnimations: true
});
