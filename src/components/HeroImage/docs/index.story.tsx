import * as HeroImageWiringExampleCSSRaw from '!raw-loader!./HeroImageWiringExample.st.css';
import * as HeroImageWiringExampleRaw from '!raw-loader!./HeroImageWiringExample.tsx';
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
} from 'wix-storybook-utils/Sections';
import { HeroImage } from '..';
import { OptimizedStylesBanner } from '../../../../stories/OptimizedStylesBanner';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as examples from './examples';
import { HeroImageWiringExample } from './HeroImageWiringExample';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.WIP,
  storyName: 'HeroImage',
  component: HeroImage,
  componentPath: '../HeroImage.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-HeroImage',
    src: 'c5f754_186e90ba2c9b47de8a4a0a0346865b72~mv2.png',
    width: 500,
    height: 200,
  }),
  exampleProps: commonExampleProps,
  dataHook: 'storybook-HeroImage',
  sections: [
    header({
      component: <OptimizedStylesBanner />,
    }),
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
              title: 'Basic Usage',
              description: 'This example demonstrates the usage of',
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
