import * as ThumbnailImageWiringExampleCSSRaw from '!raw-loader!./ThumbnailImageWiringExample.st.css';
import * as ThumbnailImageWiringExampleRaw from '!raw-loader!./ThumbnailImageWiringExample.tsx';
import LinkTo from '@storybook/addon-links/react';
import * as React from 'react';
import {
  api,
  code as baseCode,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { ThumbnailImage } from '..';
import { OptimizedStylesBanner } from '../../../../stories/OptimizedStylesBanner';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { commonExampleProps, commonWiringNumberParams } from '../../Image/docs';
import * as examples from './examples';
import { ThumbnailImageWiringExample } from './ThumbnailImageWiringExample';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const dataHook = 'storybook-ThumbnailImage';

export default {
  category: StoryCategory.WIP,
  storyName: 'ThumbnailImage',
  component: ThumbnailImage,
  componentPath: '../ThumbnailImage.tsx',
  componentProps: () => ({
    'data-hook': dataHook,
    src: 'c5f754_f4ccb2e3ed75479dbfd55e02ef9c47e8~mv2.png',
    width: 300,
    height: 300,
  }),
  exampleProps: commonExampleProps,
  dataHook,
  sections: [
    header({
      component: <OptimizedStylesBanner />,
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`ThumbnailImage` is a component representing a relativity small image that typically act as target leading to a primary content (page/flow).',
          ),

          description({
            text: [
              <p style={{ marginBottom: '20px' }} key={`${dataHook}-link`}>
                ⚠️ This component inherits the props API from{' '}
                <LinkTo kind={'Working In Progress'} story="Image">
                  {'<Image/>'}
                </LinkTo>
                , so take a look at that component for additional examples.
              </p>,
            ],
          }),

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
            {
              title: 'Within a Card',
              description:
                'This example demonstrates a thumbnail image appearing withing a card.',
              source: examples.cardExample,
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
                    defaultColor: 'color-2',
                  },
                  {
                    label: 'Border color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-5',
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
