import {configure} from '@storybook/react';
import styleProcessor from 'wix-style-processor';
import './stories.scss';

function loadStories() {
  require('../mocks');
  styleProcessor.init();

  const req = require.context('../src', true, /\.visual\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
