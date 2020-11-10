import * as ImageWiringExampleCSSRaw from '!raw-loader!./ImageWiringExample.st.css';
import * as ImageWiringExampleRaw from '!raw-loader!./ImageWiringExample.tsx';
import * as React from 'react';
import {
  api,
  code as baseCode,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { Image } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as examples from './examples';
import { ImageWiringExample } from './ImageWiringExample';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Image',
  component: Image,
  componentPath: '../Image.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Image',
    src:
      'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
    width: 300,
    height: 250,
    alt: 'Garfield smiles and puts his hand over chest',
  }),
  dataHook: 'storybook-Image',
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
              title: 'Regular Image',
              description:
                'This example demonstrates the usage of an external image with a full URL.',
              source: examples.regularImageExample,
            },
            {
              title: 'Media Image',
              description:
                'This example demonstrates the usage of an item from the media manager.',
              source: examples.mediaImageExample,
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
              title: 'Image Panel',
              example: <ImageWiringExample />,
              rawSource: ImageWiringExampleRaw,
              rawCSSSource: ImageWiringExampleCSSRaw,
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
