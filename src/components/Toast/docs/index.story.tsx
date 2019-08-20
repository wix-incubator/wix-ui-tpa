import * as React from 'react';
import { Toast } from '../';
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
import { TOAST_SKIN } from '../types';

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
    onClose: () => {},
  }),
  exampleProps: {
    skin: Object.values(TOAST_SKIN),
    shouldShowCloseButton: false,
    shouldAnimate: false,
    isShown: false,
  },
  dataHook: 'storybook-Toast',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(Readme),

          divider(),

          title('Examples'),

          ...Object.keys(TOAST_SKIN)
            .map(skin => ({
              title: skin,
              source: examples.example.desktop[skin],
            }))
            .map(code),

          title('Mobile Examples'),

          ...Object.keys(TOAST_SKIN)
            .map(skin => ({
              title: skin,
              source: examples.example.mobile[skin],
            }))
            .map(code),
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
