import * as React from 'react';
import { ToggleSwitch } from '..';
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

import * as Readme from '../README.md';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'ToggleSwitch',
  component: ToggleSwitch,
  componentPath: '../ToggleSwitch.tsx',
  componentProps: {
    'data-hook': 'storybook-ToggleSwitch',
    //checked: true,
  },
  exampleProps: {},
  dataHook: 'storybook-ToggleSwitch',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          //description(Readme),
          importExample(examples.importExample),
          divider(),
          title('Examples'),
          ...[{ title: 'Default', source: examples.defult }].map(code),
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
