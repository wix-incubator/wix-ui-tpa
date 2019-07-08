import {configure, addParameters} from '@storybook/react';
import styleProcessor from 'wix-style-processor';
import domService from 'wix-style-processor/dist/es/src/domService';

const fixedDomService = {
  ...domService,
  overrideStyle: (tag, css) => {
    const result = domService.overrideStyle(tag, css);
    delete tag.originalTemplate;
    return result;
  },
};

let isRendered = false;

function loadStories() {
  require('../stories');
  require('../mocks');
  require('./stories.scss');
  if (!isRendered) {
    styleProcessor.init({}, fixedDomService);
    isRendered = true;
  } else {
    setTimeout(() => {
      styleProcessor.update();
    });
  }
}

addParameters({
  options: {
    name: 'wix-ui-tpa',
    url: 'https://github.com/wix-private/wix-ui-tpa',
    showAddonPanel: false,
  }
});

configure(loadStories, module);

if (module.hot) {
  module.hot.accept('../stories', () => {
    configure(loadStories, module);
  });
}
