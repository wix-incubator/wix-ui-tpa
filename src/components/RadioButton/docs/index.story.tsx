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
import * as RadioButtonWiringExampleRaw from '!raw-loader!./RadioButtonWiringExample.tsx';
import * as RadioButtonWiringExampleCSSRaw from '!raw-loader!./RadioButtonWiringExample.st.css';
import RadioButtonWiringExample from './RadioButtonWiringExample';
import { RadioButton } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'RadioButton',
  component: RadioButton,
  componentPath: '../RadioButton.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-RadioButton',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-RadioButton',
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

          ...[{ title: 'Unchecked', source: examples.uncheckedExample }].map(
            code,
          ),
          ...[{ title: 'Checked', source: examples.checkedExample }].map(code),
          ...[{ title: 'Disabled', source: examples.disabledExample }].map(
            code,
          ),
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
              title: 'RadioButton Panel',
              example: <RadioButtonWiringExample />,
              rawSource: RadioButtonWiringExampleRaw,
              rawCSSSource: RadioButtonWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Icon Color',
                    wixParam: 'iconColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Text Color',
                    wixParam: 'textColor',
                    defaultColor: 'color-5',
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
