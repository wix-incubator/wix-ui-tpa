import * as HeroImageWiringExampleCSSRaw from '!raw-loader!./HeroImageWiringExample.st.css';
import * as HeroImageWiringExampleRaw from '!raw-loader!./HeroImageWiringExample.tsx';
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
import { HeroImage } from '..';
import { OptimizedStylesBanner } from '../../../../stories/OptimizedStylesBanner';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { commonExampleProps } from '../../Image/docs';
import * as examples from './examples';
import { HeroImageWiringExample } from './HeroImageWiringExample';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const dataHook = 'storybook-HeroImage';

export default {
  category: StoryCategory.WIP,
  storyName: 'HeroImage',
  component: HeroImage,
  componentPath: '../HeroImage.tsx',
  componentProps: () => ({
    'data-hook': dataHook,
    src: 'c5f754_186e90ba2c9b47de8a4a0a0346865b72~mv2.png',
    width: 500,
    height: 200,
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
            '`HeroImage` is a component representing a header with high presence providing context about the page content.',
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
              description: 'This example demonstrates a simple hero image.',
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
              title: 'HeroImage Panel',
              example: <HeroImageWiringExample />,
              rawSource: HeroImageWiringExampleRaw,
              rawCSSSource: HeroImageWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Background color',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-5',
                  },
                ],
                numbers: [
                  {
                    label: 'Image opacity',
                    wixParam: 'imageOpacity',
                    defaultNumber: 100,
                    unit: '%',
                  },
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
