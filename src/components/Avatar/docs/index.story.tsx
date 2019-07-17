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
    size: Object.keys(AvatarSize),
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

          ...Object.keys(AvatarSize)
            .map(size => ({
              title: size,
              source: examples.example[size],
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
