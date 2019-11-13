import * as React from 'react';
import { TextField, TextFieldTheme } from '..';

import {
  header,
  api,
  divider,
  importExample,
  playground,
  code as baseCode,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import * as examples from './examples';
import { TextFieldExtendedExample } from './TextFieldExtendedExample';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as textFieldRawSource from '!raw-loader!./TextFieldExtendedExample.tsx';
import * as textFieldCSSRawSource from '!raw-loader!./TextFieldExtendedExample.st.css';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'TextField',

  component: TextField,
  componentPath: '../TextField.tsx',

  componentProps: (setState, getState) => ({
    'data-hook': 'storybook-TextField',
    value: '',
    onChange: ({ target: { value } }) => setState({ value }),
  }),

  exampleProps: {
    theme: Object.values(TextFieldTheme),
    value: [
      { label: 'Empty', value: '' },
      { label: 'Short', value: 'Text' },
      {
        label: 'Long',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },

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
          ...[
            {
              title: 'Placeholder',
              source: examples.placeholder,
            },
            {
              title: 'With provided value',
              source: examples.value,
            },
            {
              title: 'Success value',
              source: examples.success,
            },
            {
              title: 'Success value with icon',
              source: examples.successWithIcon,
            },
            {
              title: 'Error value',
              source: examples.error,
            },
            {
              title: 'Error with errorMessage',
              source: examples.errorWithErrorMessage,
            },
            {
              title: 'Line theme',
              source: examples.lineTheme,
            },
            {
              title: 'Line theme success',
              source: examples.lineThemeSuccess,
            },
            {
              title: 'Line theme success with success icon',
              source: examples.lineThemeSuccessWithIcon,
            },
            {
              title: 'Line theme error',
              source: examples.lineThemeError,
            },
            {
              title: 'Line theme error with error message',
              source: examples.lineThemeErrorMessage,
            },
          ].map(code),
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
              example: <TextFieldExtendedExample value="Test" />,
              rawSource: textFieldRawSource,
              title: 'Text area preferences',
              rawCSSSource: textFieldCSSRawSource,
              params: {
                fonts: [
                  {
                    label: 'Font',
                    wixParam: 'textFont',
                    defaultFont: 'arial',
                  },
                ],
                colors: [
                  {
                    label: 'Background color',
                    wixParam: 'textFieldBackgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Text color',
                    wixParam: 'textFieldTextColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Border color',
                    wixParam: 'textFieldBorderColor',
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
