import * as React from 'react';
import { Badge, BADGE_PRIORITY } from '../';
import * as examples from './examples';
import {
  header,
  api,
  description,
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
import * as Readme from '../README.md';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Badge',
  component: Badge,
  componentPath: '../Badge.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Badge',
    children: 'Badge',
    priority: BADGE_PRIORITY.primary,
  }),
  exampleProps: {
    priority: Object.values(BADGE_PRIORITY),
  },
  dataHook: 'storybook-Badge',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(Readme),
          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[{ title: 'Example', source: examples.example }].map(code),
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
