import * as React from 'react';
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
import { OptimizedStylesBanner } from '../../../../stories/OptimizedStylesBanner';
import { allComponents } from '../../../../stories/utils/allComponents';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as DatePickerInputWiringExampleRaw from '!raw-loader!./DatePickerInputWiringExample.tsx';
import * as DatePickerInputWiringExampleCSSRaw from '!raw-loader!./DatePickerInputWiringExample.st.css';
import { DatePickerInputWiringExample } from './DatePickerInputWiringExample';
import { DatePickerInput } from '../';
import { TextFieldTheme } from '../../TextField/TextFieldEnums';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.WIP,
  storyName: 'DatePickerInput',
  component: DatePickerInput,
  componentPath: '../DatePickerInput.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-DatePickerInput',
    value: new Date(),
    placeholderText: 'Select Date',
    disabled: false,
    excludePastDates: false,
    showMonthDropdown: false,
    showYearDropdown: false,
    hasError: false,
    errorMessage: 'Error Message',
  }),
  exampleProps: {
    value: [
      { label: 'Without selected day', value: '' },
      { label: 'Today', value: new Date() },
    ],
    locale: [
      { label: 'en', value: 'en' },
      { label: 'es', value: 'es' },
      { label: 'fr', value: 'fr' },
    ],
    dateFormat: [
      { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
      { label: 'dd/LL/yy', value: 'dd/LL/yy' },
      { label: 'LLL dd, yyyy', value: 'LLL dd, yyyy' },
      { label: 'Custom', value: (date) => date.getDate() },
    ],
    filterDate: [
      {
        label: 'Prior to the current date',
        value: (date) => date < new Date(),
      },
    ],
    firstDayOfWeek: [
      { label: 'Monday', value: 1 },
      { label: 'Sunday', value: 0 },
    ],
    inputWidth: [
      { label: '400px', value: 400 },
      { label: '100%', value: '100%' },
    ],
    inputTheme: Object.values(TextFieldTheme),
  },
  dataHook: 'storybook-DatePickerInput',
  sections: [
    header({
      component: <OptimizedStylesBanner />,
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'The Date pickers presents a calendar and allows a user to select a specific date.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Simple Usage', source: examples.basicExample },
            { title: 'Without a selected date', source: examples.emptyExample },
            {
              title: 'Date Format',
              description:
                'The date format could be either string of tokens (see [`date-fns V2` docs](https://date-fns.org/v2.15.0/docs/format) for list of supported tokens) or function. The default value is `LL/dd/yyyy`',
              source: examples.dateFormatExample,
            },
            {
              title: 'Filter Dates',
              description:
                'In this example only prior dates to the current date can be selected.',
              source: examples.filterExample,
            },
            {
              title: 'Years And Months Dropdowns',
              description:
                'Years or months dropdowns could be added for an easy selection.',
              source: examples.yearsAndMonthDropdowns,
            },
            { title: 'Error Mode', source: examples.errorExample },
            { title: 'Disabled Mode', source: examples.disabledExample },
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
              title: 'DatePickerInput Panel',
              example: <DatePickerInputWiringExample />,
              rawSource: DatePickerInputWiringExampleRaw,
              rawCSSSource: DatePickerInputWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Background Color',
                    wixParam: 'customBackgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Navigation Arrows Color',
                    wixParam: 'customNavigationArrowsColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Month And Year Caption Color',
                    wixParam: 'customMonthAndYearCaptionColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Weekday Text Color',
                    wixParam: 'customWeekdayTextColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Day Color',
                    wixParam: 'customDayColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Selected Day Color',
                    wixParam: 'customSelectedDayColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Selected Day BG Color',
                    wixParam: 'customSelectedDayBGColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Disabled Day Color',
                    wixParam: 'customDisabledDayColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'DateInput BG Color',
                    wixParam: 'customDateInputBGColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Date Input Text Color',
                    wixParam: 'customDateInputTextColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Date Input Border Color',
                    wixParam: 'customDateInputBorderColor',
                    defaultColor: 'color-5',
                  },
                ],
                fonts: [
                  {
                    label: 'Month And Year Caption Font',
                    wixParam: 'customMonthAndYearCaptionFont',
                    defaultFont: 'arial',
                  },
                  {
                    label: 'Weekday Font',
                    wixParam: 'customWeekdayFont',
                    defaultFont: 'arial',
                  },
                  {
                    label: 'Day Font',
                    wixParam: 'customDayFont',
                    defaultFont: 'arial',
                  },
                  {
                    label: 'Date Input Font',
                    wixParam: 'customDateInputFont',
                    defaultFont: 'arial',
                  },
                ],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
