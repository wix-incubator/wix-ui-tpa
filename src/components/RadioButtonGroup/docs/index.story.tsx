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
import * as RadioButtonGroupWiringExampleRaw from '!raw-loader!./RadioButtonGroupWiringExample.tsx';
import * as RadioButtonGroupWiringExampleCSSRaw from '!raw-loader!./RadioButtonGroupWiringExample.st.css';
import { RadioButtonGroupWiringExample } from './RadioButtonGroupWiringExample';
import { RadioButtonGroup } from '../';

console.log('this is here');
const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'RadioButtonGroup',
  component: RadioButtonGroup,
  componentPath: '../RadioButtonGroup.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-RadioButtonGroup',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-RadioButtonGroup',
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
              title: 'RadioButtonGroup Panel',
              example: <RadioButtonGroupWiringExample />,
              rawSource: RadioButtonGroupWiringExampleRaw,
              rawCSSSource: RadioButtonGroupWiringExampleCSSRaw,
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
