import * as React from 'react';
import { Avatar } from '../';
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
import { AvatarSize } from '../Avatar';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Avatar',
  component: Avatar,
  componentPath: '../Avatar.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Avatar',
    name: 'Username',
    size: AvatarSize.medium,
    src: 'https://randomuser.me/api/portraits/men/65.jpg',
  }),
  exampleProps: {
    size: [
      AvatarSize.xLarge,
      AvatarSize.large,
      AvatarSize.medium,
      AvatarSize.small,
    ],
  },
  dataHook: 'storybook-Avatar',
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
            { title: 'XLarge', source: examples.example[AvatarSize.xLarge] },
            { title: 'Large', source: examples.example[AvatarSize.large] },
            { title: 'Medium', source: examples.example[AvatarSize.medium] },
            { title: 'Small', source: examples.example[AvatarSize.small] },
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
