import * as React from 'react';
import { Calendar } from '../';
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
import { CalendarLayouts } from '../Calendar';

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
            // TODO: import example should contain sub-elements
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          // TODO: examples are not finished
          ...[
            { title: 'Default Layout Example', source: examples.simple },
            { title: 'Custom Layout Example', source: examples.complex },
            { title: 'Mobile Example', source: examples.mobile },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
