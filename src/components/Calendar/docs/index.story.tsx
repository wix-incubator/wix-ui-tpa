import * as React from 'react';
import { Calendar } from '../';
import * as examples from './examples';
import {
  header,
  api,
  divider,
  description,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { CalendarLayouts } from '../Calendar';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { ExtendedExample } from './ExtendedExample';
import * as ExtendedRawSource from '!raw-loader!./ExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./ExtendedExample.st.css';
import * as Readme from '../README.md';
import { PRIORITY, SIZE } from '../../Button/Button';
import { objectExpression } from '@babel/types';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Events',
  storyName: 'Calendar',
  component: Calendar,
  componentPath: '../Calendar.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Calendar',
    layout: CalendarLayouts.weekly,
    config: {
      days: [],
      weekDays: [
        { title: 'Mon' },
        { title: 'Tue' },
        { title: 'Wed' },
        { title: 'Thu' },
        { title: 'Fri' },
        { title: 'Sat' },
        { title: 'Sun' },
      ],
    },
    calendarTitle: 'Example Calendar',
    selectorTitle: 'Time Period',
    hideSelector: false,
    hideTodayButton: false,
    hideWeekDayTitles: false,
    onClickPrev: () => {
      alert('Clicked Prev');
    },
    onClickNext: () => {
      alert('Clicked Next');
    },
    onClickToday: () => {
      alert('Clicked Today');
    },
    ariaLabelPrev: 'Previous time period',
    ariaLabelNext: 'Next time period',
    todayButtonText: 'Today',
    todayButtonPriority: PRIORITY.secondary,
    todayButtonSize: SIZE.tiny,
  }),
  exampleProps: {
    layout: Object.values(CalendarLayouts),
    todayButtonPriority: Object.values(PRIORITY),
    todayButtonSize: Object.values(SIZE),
  },
  dataHook: 'storybook-Calendar',
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
            { title: 'Default Layout', source: examples.simple },
            {
              title: 'Custom Layout',
              source: examples.placeholder,
            },
            { title: 'Full Customization', source: examples.complex },
            { title: 'Mobile', source: examples.mobile },
          ].map(code),
        ],
      }),

      ...[
        {
          title: 'About',
          sections: [description(Readme)],
        },
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Calendar',
              example: <ExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              params: {
                colors: [
                  {
                    label: 'Title Color',
                    wixParam: 'Test',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Selector Text Color',
                    wixParam: 'SelectorMainTextColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Today Text Color',
                    wixParam: 'TodayMainTextColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Today Background Color',
                    wixParam: 'TodayMainBackgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Today Border Color',
                    wixParam: 'TodayMainBorderColor',
                    defaultColor: 'color-8',
                  },
                ],
                fonts: [
                  {
                    label: 'Title Font',
                    wixParam: 'TitleMainTextFont',
                    defaultFont: 'arial',
                  },
                  {
                    label: 'Selector Text Font',
                    wixParam: 'SelectorMainTextFont',
                    defaultFont: 'arial',
                  },
                  {
                    label: 'Today Text Font',
                    wixParam: 'TodayMainTextFont',
                    defaultFont: 'arial',
                  },
                ],
                numbers: [
                  {
                    label: 'Today Border Width',
                    wixParam: 'TodayMainBorderWidth',
                    defaultNumber: 1,
                    unit: 'px',
                    max: 10,
                    min: 0,
                  },
                  {
                    label: 'Today Border Radius',
                    wixParam: 'TodayMainBorderRadius',
                    defaultNumber: 0,
                    unit: 'px',
                    max: 100,
                    min: 0,
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
