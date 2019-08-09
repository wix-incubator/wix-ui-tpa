import * as React from 'react';
import {
  header,
  api,
  divider,
  description,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';

import { ToggleSwitch } from '../';
import * as Readme from '../README.md';
import { Examples } from './examples';

export default {
  category: 'Components',
  storyName: 'ToggleSwitch',
  component: ToggleSwitch,
  componentPath: '../ToggleSwitch.tsx',

  componentProps: {
    'data-hook': 'storybook-ToggleSwitch',
    checked: true,
  },
  exampleProps: {},

  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(Readme),
          importExample(
            "import { ToggleSwitch } from 'wix-ui-tpa/dist/src/components/ToggleSwitch';",
          ),

          divider(),

          title('Examples'),

          <Examples key="toggle-switch-examples" />,
        ],
      }),
      tab({
        title: 'API',
        sections: [api()],
      }),
      tab({
        title: 'TestKit',
        sections: [testkit()],
      }),
      tab({
        title: 'Playground',
        sections: [playground()],
      }),
    ]),
  ],
};
