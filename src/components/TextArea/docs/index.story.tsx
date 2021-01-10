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
  description,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { autoSettingsPanel } from '../../../../stories/utils/SettingsPanel';
import { TextAreaConnected as TextArea } from './connected';
import { TextAreaTheme } from '../TextAreaEnums';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'TextArea',
  component: storyComponent(TextArea),
  componentPath: '../TextArea.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-TextArea',
    placeholder: 'Enter your text here',
    value: '',
  }),
  exampleProps: {
    theme: Object.values(TextAreaTheme),
    value: [
      { label: 'Empty', value: '' },
      { label: 'Short', value: 'Text' },
      {
        label: 'Long',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        label: 'Scroll',
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  dataHook: 'storybook-TextArea',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`TextArea` is a component allowing to render a multi-line custom text.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Placeholder', source: examples.example },
            { title: 'Text', source: examples.exampleWithText },
            { title: 'Disabled', source: examples.disabledExample },
            { title: 'Success', source: examples.successExample },
            {
              title: 'Error with description',
              source: examples.errorWithDescription,
            },
            {
              title: 'Error without description',
              source: examples.errorWithoutDescription,
            },
            {
              title: 'Line theme',
              source: examples.lineTheme,
            },
            {
              title: 'Line theme with error',
              source: examples.lineThemeWithError,
            },
            {
              title: 'Box theme',
              source: examples.boxTheme,
            },
          ].map(code),
        ],
      }),

      ...[
        {
          title: 'Playground',
          sections: [playground(), autoSettingsPanel()],
        },
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
      ].map(tab),
    ]),
  ],
};
