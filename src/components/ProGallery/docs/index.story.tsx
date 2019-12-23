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
import {
  collageOptions,
  columnOptions,
  gridOptions,
  masonryOptions,
  panoramaOptions,
  proGalleryItems,
  proGalleryOptions,
  sliderOptions,
  slideShowOptions,
  thumbnailsOptions,
} from './examples';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'ProGallery',
  component: ProGallery,
  componentPath: '../ProGallery.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ProGallery',
    width: 500,
    height: 500,
    items: proGalleryItems,
    options: proGalleryOptions,
  }),
  exampleProps: {
    width: 500,
    height: 500,
    items: proGalleryItems,
    options: proGalleryOptions,
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

          ...[
            {
              title: 'ThumbnailsGalleryExample',
              source: examples.generateExample(thumbnailsOptions),
            },
            {
              title: 'CollageGalleryExample',
              source: examples.generateExample(collageOptions),
            },
            {
              title: 'MasonryGalleryExample',
              source: examples.generateExample(masonryOptions),
            },
            {
              title: 'GridGalleryExample',
              source: examples.generateExample(gridOptions),
            },
            {
              title: 'SliderGalleryExample',
              source: examples.generateExample(sliderOptions),
            },
            {
              title: 'SlideShowGalleryExample',
              source: examples.generateExample(slideShowOptions),
            },
            {
              title: 'PanoramaGalleryExample',
              source: examples.generateExample(panoramaOptions),
            },
            {
              title: 'ColumnGalleryExample',
              source: examples.generateExample(columnOptions),
            },
          ].map(code),
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
