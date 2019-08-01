import * as React from 'react';
import { Toast, TOAST_SKIN } from '../';
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
  storyName: 'Toast',
  component: Toast,
  componentPath: '../Toast.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Toast',
    children: 'Hey, I am toast component',
    skin: TOAST_SKIN.success,
  }),
  exampleProps: {
    skin: Object.values(TOAST_SKIN),
    shouldShowCloseButton: false,
  },
  dataHook: 'storybook-Toast',
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

          ...[
            { title: 'Success', source: examples.successExample },
            { title: 'Error', source: examples.errorExample },
            { title: 'Status', source: examples.statusExample },
            { title: 'Multiline', source: examples.multilineExample },
          ].map(code),

          title('Mobile Examples'),

          ...[{ title: 'Success', source: examples.successMobileExample }].map(
            code,
          ),
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
