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
import { autoSettingsPanel } from '../../../../stories/utils/SettingsPanel';
import { TextArea } from '../../../connected-components/TextArea';
import { TextAreaTheme } from '../TextAreaEnums';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import manifest from './TextArea.manifest.json';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'TextArea',
  component: TextArea,
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
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'Playground',
          sections: [playground(), autoSettingsPanel('TextArea', manifest)],
        },
        {
          title: 'Settings API',
          sections: [settingsApi(manifest)],
        },
      ].map(tab),
    ]),
  ],
};
