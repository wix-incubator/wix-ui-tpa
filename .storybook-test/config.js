import {configure, addParameters} from '@storybook/react';
import styleProcessor from 'wix-style-processor';
import './stories.scss';

function loadStories() {
  require('../mocks');
  styleProcessor.init();

  const req = require.context('../src', true, /\.visual\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addParameters({
  options: {
    name: 'wix-ui-tpa',
    url: 'https://github.com/wix-private/wix-ui-tpa',
    showAddonPanel: false,
  }
});

configure(loadStories, module);
