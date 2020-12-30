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
  description,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import * as examples from './examples';
import { TextFieldExtendedExample } from './TextFieldExtendedExample';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as textFieldRawSource from '!raw-loader!./TextFieldExtendedExample.tsx';
import * as textFieldCSSRawSource from '!raw-loader!./TextFieldExtendedExample.st.css';
import { ReactComponent as CalendarIcon } from '../../../assets/icons/Calendar.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/Heart.svg';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
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
    suffix: [
      { label: 'Calendar icon', value: <CalendarIcon /> },
      { label: 'Heart icon', value: <HeartIcon /> },
    ],
  },

  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`TextField` is a component allowing to render a field to input text.',
          ),
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
              title: 'Clear Button',
              source: examples.clearButton,
            },
            {
              title: 'Custom Suffix',
              source: examples.customSuffix,
            },
            {
              title: 'Custom Suffix and Error Status',
              source: examples.customSuffixAndError,
            },
            {
              title: 'Custom Suffix and Error Status With Clear Button',
              source: examples.customSuffixAndErrorWithClearButton,
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
            {
              title: 'Line theme Clear Button',
              source: examples.lineThemeClearButton,
            },
            {
              title: 'Line theme Custom Suffix',
              source: examples.lineThemeCustomSuffix,
            },
            {
              title: 'Line theme Custom Suffix and Error Status',
              source: examples.lineThemeCustomSuffixAndError,
            },
            {
              title:
                'Line theme Custom Suffix and Error Status With Clear Button',
              source: examples.lineThemeCustomSuffixAndErrorWithClearButton,
            },
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
