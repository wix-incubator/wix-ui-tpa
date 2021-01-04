import * as React from 'react';

import { AvatarGroup } from '../';
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
import { AvatarGroupSize } from '../AvatarGroup';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as ExtendedRawSource from '!raw-loader!./ExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./ExtendedExample.st.css';
import { ExtendedExample } from './ExtendedExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const items = [
  {},
  { name: 'anonymous' },
  { name: 'Eve', src: 'https://randomuser.me/api/portraits/women/87.jpg' },
  { name: 'John', src: 'https://randomuser.me/api/portraits/men/69.jpg' },
  {},
  { name: 'anonymous' },
  { name: 'Eve', src: 'https://randomuser.me/api/portraits/women/87.jpg' },
  { name: 'John', src: 'https://randomuser.me/api/portraits/men/69.jpg' },
];

const exampleItems = [
  { label: 'few items', value: items.slice(0, 4) },
  { label: 'many items', value: items },
];

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'AvatarGroup',
  component: AvatarGroup,
  componentPath: '../AvatarGroup.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-AvatarGroup',
    items: exampleItems[1].value,
    maxAmount: 5,
    size: AvatarGroupSize.medium,
  }),
  exampleProps: {
    items: exampleItems,
    size: Object.keys(AvatarGroupSize),
  },
  dataHook: 'storybook-AvatarGroup',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            "The Avatar group is made up of a group of avatars and an optional text link. Content in text link can be customized to the product's intent.",
          ),
          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...Object.keys(AvatarGroupSize)
            .map((size) => ({
              title: size,
              source: examples.example[size],
            }))
            .map(code),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground(), autoSettingsPanel()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Avatar Group',
              example: <ExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              params: {
                colors: [
                  {
                    label: 'Avatar Border Color',
                    wixParam: 'AvatarBorderColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Text Button Color',
                    wixParam: 'AvatarTextButtonColor',
                    defaultColor: 'color-5',
                  },
                ],
                fonts: [
                  {
                    label: 'Text Button Font',
                    wixParam: 'AvatarTextButtonFont',
                    defaultFont: 'arial',
                  },
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
