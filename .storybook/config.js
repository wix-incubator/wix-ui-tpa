import { configure, addParameters } from '@storybook/react';
import styleProcessor from 'wix-style-processor';

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
    storySort: (a, b) => {
      const kind = 'Components';

      console.log('adler', 'config.js:34', a, b);

      if (a[1].kind !== b[1].kind) {
        if (a[1].kind.startsWith(kind)) {
          return -1;
        }
        if (b[1].kind.startsWith(kind)) {
          return 1;
        }
      }

      return alphaSort(a[1].id, b[1].id);
    },
  },
});

configureStorybook();

if (module.hot) {
  module.hot.accept('../stories', () => {
    configureStorybook();
  });
}
