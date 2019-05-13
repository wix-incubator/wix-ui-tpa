import * as React from 'react';
import { {%ComponentName%} } from '../';
import * as examples from './examples';
import {
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
  category: 'Components',
  storyName: '{%ComponentName%}',
  component: {%ComponentName%},
  componentPath: '../{%ComponentName%}.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-{%ComponentName%}',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-{%ComponentName%}',
  sections: [
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
