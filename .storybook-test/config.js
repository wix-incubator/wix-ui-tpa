import { configure } from '@storybook/react';
import './stories.scss';
import { init } from '../test/visual/StyleProcessorUtil';

function loadStories() {
  require('../mocks');

  const req = require.context('../src', true, /\.visual\.tsx$/);
  req.keys().forEach(req);

  setTimeout(init);
}

configure(loadStories, module);
