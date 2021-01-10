import * as RadioButtonWiringExampleCSSRaw from '!raw-loader!./RadioButtonWiringExample.st.css';
import * as RadioButtonWiringExampleRaw from '!raw-loader!./RadioButtonWiringExample.tsx';
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
import { RadioButton } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { RadioButtonTheme } from '../RadioButton';
import * as examples from './examples';
import RadioButtonWiringExample from './RadioButtonWiringExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const childrenExamples = [
  {
    label: 'With Children',
    value: <div>With Children</div>,
  },
];

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'RadioButton',
  component: RadioButton,
  componentPath: '../RadioButton.tsx',
  componentProps: () => ({
    checked: true,
    disabled: false,
    theme: RadioButtonTheme.Default,
    label: 'Im a Radiobutton',
    children: childrenExamples[0].value,
  }),
  exampleProps: {
    theme: [RadioButtonTheme.Default, RadioButtonTheme.Box],
    children: childrenExamples,
  },
  dataHook: 'storybook-RadioButton',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`RadioButton` is a component allowing to render a single radio button',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[{ title: 'Unchecked', source: examples.uncheckedExample }].map(
            code,
          ),
          ...[{ title: 'Checked', source: examples.checkedExample }].map(code),
          ...[{ title: 'Box Theme', source: examples.boxExample }].map(code),
          ...[{ title: 'Disabled', source: examples.disabledExample }].map(
            code,
          ),
          ...[
            { title: 'Disabled box', source: examples.boxExampleDisabled },
          ].map(code),
          ...[
            {
              title: 'Disabled, Checked box',
              source: examples.boxExampleDisabledChecked,
            },
          ].map(code),
          ...[{ title: 'Suffixed', source: examples.suffixExample }].map(code),
          ...[{ title: 'Error', source: examples.errorExample }].map(code),
          ...[
            { title: 'With Children', source: examples.withChildrenExample },
          ].map(code),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground(), autoSettingsPanel()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
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
