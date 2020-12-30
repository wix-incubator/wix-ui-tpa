import * as React from 'react';
import { Checkbox, CheckboxTheme } from '../';
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
import { allComponents } from '../../../../stories/utils/allComponents';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as ExtendedRawSource from '!raw-loader!./CheckboxExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./CheckboxExtendedExample.st.css';
import { CheckboxExtendedExample } from './CheckboxExtendedExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const codeExamples = [
  { title: 'Default', source: examples.example },
  {
    title: 'Checked',
    source: examples.exampleWithChecked,
  },
  { title: 'Error state', source: examples.exampleWithError },
  { title: 'Disabled state', source: examples.exampleWithDisabled },
  {
    title: 'With indeterminate state',
    source: examples.exampleWithIndeterminate,
  },
  {
    title: 'With box',
    source: examples.exampleWithBox,
  },
  {
    title: 'With checked box',
    source: examples.exampleWithCheckedBox,
  },
  {
    title: 'With disabled box',
    source: examples.exampleWithDisabledBox,
  },
  {
    title: 'With disabled, checked box',
    source: examples.exampleWithDisabledCheckedBox,
  },
  {
    title: 'With box and suffix',
    source: examples.exampleWithBoxAndSuffix,
  },
  {
    title: 'With small box and suffix',
    source: examples.exampleWithSmallBoxAndSuffix,
  },
];

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Checkbox',
  component: Checkbox,
  componentPath: '../Checkbox.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Checkbox',
  }),
  exampleProps: {
    theme: Object.values(CheckboxTheme),
  },
  dataHook: 'storybook-Checkbox',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'Checkbox allows the user to select one or more items from a set.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...codeExamples.map(code),
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
              title: 'Settings Panel',
              example: <CheckboxExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
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
                  {
                    label: 'Box Color',
                    wixParam: 'boxColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Box Border Color',
                    wixParam: 'boxBorderColor',
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
