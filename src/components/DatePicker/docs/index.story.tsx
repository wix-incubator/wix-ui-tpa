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
import { allComponents } from '../../../../stories/utils/allComponents';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as DatePickerWiringExampleRaw from '!raw-loader!./DatePickerWiringExample.tsx';
import * as DatePickerWiringExampleCSSRaw from '!raw-loader!./DatePickerWiringExample.st.css';
import { DatePickerWiringExample } from './DatePickerWiringExample';
import { DatePicker } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'DatePicker',
  component: DatePicker,
  componentPath: '../DatePicker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-DatePicker',
    value: new Date(),
    placeholderText: 'Select Date',
    disabled: false,
    dateFormat: 'LL/dd/yyyy',
    excludePastDates: false,
    firstDayOfWeek: 1,
  }),
  exampleProps: {
    locale: [
      { label: 'en', value: 'en' },
      { label: 'es', value: 'es' },
      { label: 'fr', value: 'fr' },
    ],
    filterDate: [
      { label: 'Prior to the current date', value: date => date < new Date() },
      { label: 'No filter', value: '' },
    ],
  },
  dataHook: 'storybook-DatePicker',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
              'Desc.',
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
              title: 'DatePicker Panel',
              example: <DatePickerWiringExample />,
              rawSource: DatePickerWiringExampleRaw,
              rawCSSSource: DatePickerWiringExampleCSSRaw,
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
