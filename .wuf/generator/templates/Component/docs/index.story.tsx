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
import * as {%ComponentName%}WiringExampleRaw from '!raw-loader!./{%ComponentName%}WiringExample.tsx';
import * as {%ComponentName%}WiringExampleCSSRaw from '!raw-loader!./{%ComponentName%}WiringExample.st.css';
import { {%ComponentName%}WiringExample } from './{%ComponentName%}WiringExample';
import { {%ComponentName%} } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: '{%ComponentName%}',
  component: storyComponent({%ComponentName%}),
  componentPath: '../{%ComponentName%}.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-{%ComponentName%}',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-{%ComponentName%}',
  sections: [
    header({
      component: <OptimizedStylesBanner />,
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(%description%),

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
              title: '{%ComponentName%} Panel',
              example: <{%ComponentName%}WiringExample />,
              rawSource: {%ComponentName%}WiringExampleRaw,
              rawCSSSource: {%ComponentName%}WiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Background color',
                    wixParam: 'myBackgroundOverride',
                    defaultColor: 'color-1',
                  },
                ],
                fonts: [{
                  label: 'Text Font',
                  wixParam: 'myFontOverride',
                  defaultFont: 'arial',
                  size: 16,
                  fixedSize: false,
                }],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
