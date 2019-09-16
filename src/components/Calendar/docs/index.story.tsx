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
    calendarTitle: 'Example Calendar',
  }),
  exampleProps: {
    layout: Object.values(CalendarLayouts),
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
            { title: 'Default Layout Example', source: examples.simple },
            { title: 'Custom Layout Example', source: examples.complex },
            { title: 'Mobile Example', source: examples.mobile },
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
                    wixParam: 'TitleMainTextColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Selector Text Color',
                    wixParam: 'SelectorMainTextColor',
                    defaultColor: 'color-5',
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
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
