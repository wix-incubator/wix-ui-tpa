import * as React from 'react';
import { TextArea } from '../';
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
import * as extendedRawSource from '!raw-loader!./TextAreaExtendedExample.tsx';
import * as extendedCSSRawSource from '!raw-loader!./TextAreaExtendedExample.st.css';
import { TextAreaExtendedExample } from './TextAreaExtendedExample';
import { TextAreaTheme } from '../TextAreaEnums';

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
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              example: <TextAreaExtendedExample />,
              rawSource: extendedRawSource,
              title: 'Text area preferences',
              rawCSSSource: extendedCSSRawSource,
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
                    label: 'ErrorBorderColor',
                    wixParam: 'errorBorderColor',
                    defaultColor: 'color-13',
                  },
                  {
                    label: 'Disabled border color',
                    wixParam: 'disabledBorderColor',
                    defaultColor: 'color-3',
                  },
                  {
                    label: 'SuccessBorderColor',
                    wixParam: 'successBorderColor',
                    defaultColor: 'color-18',
                  },
                  {
                    label: 'BackgroundColor',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'BorderColor',
                    wixParam: 'borderColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'TextColor',
                    wixParam: 'textColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'DisabledTextColor',
                    wixParam: 'disabledTextColor',
                    defaultColor: 'color-3',
                  },
                  {
                    label: 'PlaceholderColor',
                    wixParam: 'placeholderColor',
                    defaultColor: 'color-3',
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
