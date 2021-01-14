import * as React from 'react';
import { CheckboxGroup, CheckboxGroupLayout } from '../';
import { Checkbox } from '../../Checkbox';
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
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { allComponents } from '../../../../stories/utils/allComponents';
import * as ExtendedRawSource from '!raw-loader!./CheckboxGroupExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./CheckboxGroupExtendedExample.st.css';
import { CheckboxGroupExtendedExample } from './CheckboxGroupExtendedExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const noop = () => {};
const el = [
  <Checkbox key={1} name="group1" onChange={noop} label="Checkbox 1" />,
  <Checkbox key={2} name="group1" onChange={noop} label="Checkbox 2" />,
  <Checkbox key={3} name="group1" onChange={noop} label="Checkbox 3" />,
];

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'CheckboxGroup',
  component: CheckboxGroup,
  componentPath: '../CheckboxGroup.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-CheckboxGroup',
    children: el,
  }),
  exampleProps: {
    layout: Object.values(CheckboxGroupLayout),
  },
  dataHook: 'storybook-CheckboxGroup',
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

          ...[
            { title: 'Default', source: examples.example },
            { title: 'With label', source: examples.exampleWithLabel },
            { title: 'With long text', source: examples.exampleWithLongText },
            {
              title: 'Layout="horizontal"',
              source: examples.exampleHorizontal,
            },
            {
              title: 'Layout="horizontal" with long text & max width',
              source: examples.exampleHorizontalWithLongText,
            },
            {
              title: 'Layout="horizontal" with long text & min width',
              source: examples.exampleHorizontalWithLongTextMinWidth,
            },
            {
              title: 'Layout="horizontal" with error text',
              source: examples.exampleHorizontalWithErrorText,
            },
            { title: 'Disabled', source: examples.exampleWithLabelDisabled },
            { title: 'With Error', source: examples.exampleWithError },
            { title: 'With Error Text', source: examples.exampleWithErrorText },
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
              title: 'Settings Panel',
              example: <CheckboxGroupExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              params: {
                colors: [
                  {
                    label: 'Label Color',
                    wixParam: 'labelColor',
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
