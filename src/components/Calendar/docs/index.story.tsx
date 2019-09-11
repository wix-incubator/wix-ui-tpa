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

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Events',
  storyName: 'Calendar',
  component: Calendar,
  componentPath: '../Calendar.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Calendar',
    layout: 'weekly',
  }),
  exampleProps: {
    //
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
            { title: 'Example', source: examples.example },
            { title: 'Mobile Example', source: examples.mobileExample },
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
