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
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as ProgressBarWiringExampleRaw from '!raw-loader!./ProgressBarWiringExample.tsx';
import * as ProgressBarWiringExampleCSSRaw from '!raw-loader!./ProgressBarWiringExample.st.css';
import { ProgressBarWiringExample } from './ProgressBarWiringExample';
import { ProgressBar } from '../';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'ProgressBar',
  component: ProgressBar,
  componentPath: '../ProgressBar.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ProgressBar',
    value: 20,
    showProgressIndication: true,
    min: 0,
    max: 100,
  }),
  exampleProps: {},
  dataHook: 'storybook-ProgressBar',
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
            { title: 'Example', source: examples.example },
            { title: 'With percentage', source: examples.exampleWithText },
            { title: 'RTL', source: examples.exampleRTL },
            {
              title: 'RTL with percentage',
              source: examples.exampleRTLWithPercentage,
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
              title: 'ProgressBar Panel',
              example: <ProgressBarWiringExample />,
              rawSource: ProgressBarWiringExampleRaw,
              rawCSSSource: ProgressBarWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Bar Color',
                    wixParam: 'barColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Bar Background Color',
                    wixParam: 'barBGColor',
                    defaultColor: 'color-5',
                  },
                ],
                fonts: [
                  {
                    label: 'Text Percentage Font',
                    wixParam: 'textFont',
                    defaultFont: 'arial',
                  },
                ],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
