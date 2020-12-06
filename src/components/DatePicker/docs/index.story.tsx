import * as React from 'react';
import * as examples from './examples';
import {
  description,
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
import * as DatePickerWiringExampleRaw from '!raw-loader!./DatePickerWiringExample.tsx';
import * as DatePickerWiringExampleCSSRaw from '!raw-loader!./DatePickerWiringExample.st.css';
import { DatePickerWiringExample } from './DatePickerWiringExample';
import { DatePicker } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'DatePicker',
  component: storyComponent(DatePicker),
  componentPath: '../DatePicker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-DatePicker',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-DatePicker',
  sections: [
    header({
      component: <OptimizedStylesBanner />,
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'The DatePicker allows a user to select a specific date.',
          ),

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
              title: 'DatePicker Panel',
              example: <DatePickerWiringExample />,
              rawSource: DatePickerWiringExampleRaw,
              rawCSSSource: DatePickerWiringExampleCSSRaw,
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
