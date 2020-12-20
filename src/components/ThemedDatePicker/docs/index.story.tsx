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
import { OptimizedStylesBanner } from '../../../../stories/OptimizedStylesBanner';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as ThemedDatePickerWiringExampleRaw from '!raw-loader!./ThemedDatePickerWiringExample.tsx';
import * as ThemedDatePickerWiringExampleCSSRaw from '!raw-loader!./ThemedDatePickerWiringExample.st.css';
import { ThemedDatePickerWiringExample } from './ThemedDatePickerWiringExample';
import { ThemedDatePicker } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'ThemedDatePicker',
  component: storyComponent(ThemedDatePicker),
  componentPath: '../ThemedDatePicker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ThemedDatePicker',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-ThemedDatePicker',
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
            { title: 'Example', source: examples.example },
            { title: 'Mobile Example', source: examples.mobileExample },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'ThemedDatePicker Panel',
              example: <ThemedDatePickerWiringExample />,
              rawSource: ThemedDatePickerWiringExampleRaw,
              rawCSSSource: ThemedDatePickerWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Background color',
                    wixParam: 'myBackgroundOverride',
                    defaultColor: 'color-1',
                  },
                ],
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
