import * as React from 'react';
import * as examples from './examples';
import {
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as ProGalleryWiringExampleRaw from '!raw-loader!./ProGalleryWiringExample.tsx';
import * as ProGalleryWiringExampleCSSRaw from '!raw-loader!./ProGalleryWiringExample.st.css';
import { ProGalleryWiringExample } from './ProGalleryWiringExample';
import { ProGallery } from '../';
import { ProGalleryLayouts } from '../types';
import * as _ from 'lodash';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'ProGallery',
  component: ProGallery,
  componentPath: '../ProGallery.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ProGallery',
    width: 1000,
    height: 1000,
    items: examples.proGalleryItems,
    options: examples.proGalleryOptions[0],
    scrollingElement: e => e.target.parentElement,
    eventsListener: _.noop,
    domId: examples.domId,
  }),
  exampleProps: {
    'data-hook': 'storybook-ProGallery',
    width: 1000,
    height: 1000,
    items: examples.proGalleryItems,
    options: examples.proGalleryOptions[0],
    scrollingElement: e => e.target.parentElement,
    eventsListener: _.noop,
    domId: examples.domId,
  },
  dataHook: 'storybook-ProGallery',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: examples.importExample,
          }),
          divider(),
          title('Examples'),
          ...examples.proGalleryOptions
            .map((ProGalleryOption, index) => {
              return {
                title: ProGalleryLayouts[ProGalleryOption.galleryLayout],
                source: examples.generateExample(ProGalleryOption, index),
              };
            })
            .map(code),
        ],
      }),
      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'ProGallery Panel',
              example: <ProGalleryWiringExample />,
              rawSource: ProGalleryWiringExampleRaw,
              rawCSSSource: ProGalleryWiringExampleCSSRaw,
              params: {
                colors: [],
                fonts: [],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
