import * as ThumbnailImageWiringExampleCSSRaw from '!raw-loader!./ThumbnailImageWiringExample.st.css';
import * as ThumbnailImageWiringExampleRaw from '!raw-loader!./ThumbnailImageWiringExample.tsx';
import * as React from 'react';
import { commonExampleProps, commonWiringNumberParams } from '../../Image/docs';
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
  description,
} from 'wix-storybook-utils/Sections';
import { ThumbnailImage } from '..';
import { OptimizedStylesBanner } from '../../../../stories/OptimizedStylesBanner';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as examples from './examples';
import { ThumbnailImageWiringExample } from './ThumbnailImageWiringExample';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.WIP,
  storyName: 'ThumbnailImage',
  component: ThumbnailImage,
  componentPath: '../ThumbnailImage.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ThumbnailImage',
    src: 'c5f754_186e90ba2c9b47de8a4a0a0346865b72~mv2.png',
    width: 500,
    height: 200,
  }),
  exampleProps: commonExampleProps,
  dataHook: 'storybook-ThumbnailImage',
  sections: [
    header({
      component: <OptimizedStylesBanner />,
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`ThumbnailImage` is a component representing a header with high presence providing context about the page content.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Basic Usage',
              description:
                'This example demonstrates a simple thumbnail image.',
              source: examples.basicExample,
            },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'ThumbnailImage Panel',
              example: <ThumbnailImageWiringExample />,
              rawSource: ThumbnailImageWiringExampleRaw,
              rawCSSSource: ThumbnailImageWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Background color',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Border color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-1',
                  },
                ],
                numbers: commonWiringNumberParams,
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
