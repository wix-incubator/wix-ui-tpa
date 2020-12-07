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
import * as SimpleDatePickerWiringExampleRaw from '!raw-loader!./SimpleDatePickerWiringExample.tsx';
import * as SimpleDatePickerWiringExampleCSSRaw from '!raw-loader!./SimpleDatePickerWiringExample.st.css';
import { SimpleDatePickerWiringExample } from './SimpleDatePickerWiringExample';
import { SimpleDatePicker } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'SimpleDatePicker',
  component: storyComponent(SimpleDatePicker),
  componentPath: '../SimpleDatePicker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-SimpleDatePicker',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-SimpleDatePicker',
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
              title: 'SimpleDatePicker Panel',
              example: <SimpleDatePickerWiringExample />,
              rawSource: SimpleDatePickerWiringExampleRaw,
              rawCSSSource: SimpleDatePickerWiringExampleCSSRaw,
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
