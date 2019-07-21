import * as React from 'react';

import { AvatarGroup } from '../';
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
import { AvatarGroupSize } from '../AvatarGroup';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as ExtendedRawSource from '!raw-loader!./ExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./ExtendedExample.st.css';
import { ExtendedExample } from './ExtendedExample';

const code = config =>
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
  category: 'Components',
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
          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...Object.keys(AvatarGroupSize)
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
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
