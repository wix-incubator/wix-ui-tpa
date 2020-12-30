import * as React from 'react';
import { Avatar } from '../';
import * as examples from './examples';
import {
  description,
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
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { AvatarSize } from '../Avatar';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
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
          description(
            'Avatar is a type of element that visually represents a user, either as an image, placeholder or text (name initials).',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...Object.keys(AvatarSize)
            .map((size) => ({
              title: size,
              source: examples.example[size],
            }))
            .map(code),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
      ].map(tab),
    ]),
  ],
};
