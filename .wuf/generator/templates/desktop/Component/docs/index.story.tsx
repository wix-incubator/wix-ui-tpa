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
import * as {%ComponentName%}WiringExampleRaw from '!raw-loader!./{%ComponentName%}WiringExample.tsx';
import * as {%ComponentName%}WiringExampleCSSRaw from '!raw-loader!./{%ComponentName%}WiringExample.st.css';
import { {%ComponentName%}WiringExample } from './{%ComponentName%}WiringExample';
import { {%ComponentName%} } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: '{%ComponentName%}',
  component: {%ComponentName%},
  componentPath: '../{%ComponentName%}.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-{%ComponentName%}',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-{%ComponentName%}',
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

          ...[{ title: 'Example', source: examples.example }].map(code),
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
              title: '{%ComponentName%} Panel',
              example: <{%ComponentName%}WiringExample />,
              rawSource: {%ComponentName%}WiringExampleRaw,
              rawCSSSource: {%ComponentName%}WiringExampleCSSRaw,
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
