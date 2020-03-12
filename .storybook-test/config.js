import {addParameters, configure} from '@storybook/react';
import './stories.scss';
import { init } from '../test/visual/StyleProcessorUtil';

function loadStories() {
  require('../mocks');

  const req = require.context('../src', true, /\.visual\.tsx$/);
  req.keys().forEach(filename => req(filename));

  setTimeout(init);
}

function alphaSort(strA, strB) {
  if (strA > strB) {
    return 1;
  }
  if (strA < strB) {
    return -1;
  }
  return 0;
}

addParameters({
  options: {
    name: 'wix-ui-tpa',
    url: 'https://github.com/wix/wix-ui-tpa',
    storySort: (a, b) => alphaSort(a[1].id, b[1].id),
  },
});

configure(loadStories, module);
