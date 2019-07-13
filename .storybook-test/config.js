import {configure} from '@storybook/react';
import './stories.scss';

function loadStories() {
  require('../mocks');

  const req = require.context('../src', true, /\.visual\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
