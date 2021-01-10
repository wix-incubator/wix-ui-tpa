import * as React from 'react';
import * as examples from './examples';
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
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as RadioButtonGroupWiringExampleRaw from '!raw-loader!./RadioButtonGroupWiringExample.tsx';
import * as RadioButtonGroupWiringExampleCSSRaw from '!raw-loader!./RadioButtonGroupWiringExample.st.css';
import { RadioButtonGroupWiringExample } from './RadioButtonGroupWiringExample';
import { RadioButtonGroup, RadioButtonGroupLayout } from '../';
import { RadioButton, RadioButtonTheme } from '../../RadioButton/RadioButton';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'RadioButtonGroup',
  component: RadioButtonGroup,
  componentPath: '../RadioButtonGroup.tsx',
  componentProps: () => ({
    theme: RadioButtonTheme.Box,
    layout: RadioButtonGroupLayout.Horizontal,
    value: 'option1',
    name: 'areAreRadio',
    withSpacing: false,
    children: [
      <RadioButton key={'option1'} label={'option 1'} value={'option1'} />,
      <RadioButton key={'option2'} label={'option 2'} value={'option2'} />,
      <RadioButton key={'option2'} label={'option 2'} value={'option3'} />,
    ],
  }),
  exampleProps: {
    theme: [RadioButtonTheme.Default, RadioButtonTheme.Box],
    layout: [
      RadioButtonGroupLayout.Vertical,
      RadioButtonGroupLayout.Horizontal,
    ],
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
          ...[{ title: 'Disabled', source: examples.disabledExample }].map(
            code,
          ),
          ...[{ title: 'Box Theme', source: examples.boxExample }].map(code),
          ...[
            {
              title: 'Box Theme with spacing',
              source: examples.boxExampleWithSpacing,
            },
          ].map(code),
          ...[
            { title: 'horizontal layout', source: examples.horizontalLayput },
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
