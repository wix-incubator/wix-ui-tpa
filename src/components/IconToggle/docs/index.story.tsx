import * as React from 'react';
import { IconToggle } from '../';
import Examples from './examples.tsx';
import {
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';

export default {
  category: 'Components',
  storyName: 'IconToggle',
  component: IconToggle,
  componentPath: '../IconToggle.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-IconToggle',
    checked: false,
    disabled: false,
    labelPlacement: 'right',
  }),
  exampleProps: {
    labelPlacement: ['right', 'left'],
  },
  dataHook: 'storybook-IconToggle',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: `import { IconToggle } from 'wix-ui-tpa/IconToggle';`,
          }),

          divider(),

          title('Examples'),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
  examples: <Examples />,
};
