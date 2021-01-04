import * as SocialBarWiringExampleCSSRaw from '!raw-loader!./SocialBarWiringExample.st.css';
import * as SocialBarWiringExampleRaw from '!raw-loader!./SocialBarWiringExample.tsx';
import * as React from 'react';
import {
  api,
  code as baseCode,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
  description,
} from 'wix-storybook-utils/Sections';
import { SocialBar } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { ReactComponent as Facebook } from '../../../assets/icons/Social/Facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/icons/Social/Instagram.svg';
import { ReactComponent as Linkedin } from '../../../assets/icons/Social/Linkedin.svg';
import { ReactComponent as Pinterest } from '../../../assets/icons/Social/Pinterest.svg';
import { ReactComponent as Tumblr } from '../../../assets/icons/Social/Tumblr.svg';
import { CopyUrlButton } from '../../CopyUrlButton';
import * as examples from './examples';
import { SocialBarWiringExample } from './SocialBarWiringExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

/* tslint:disable */

const DEFAULT_CHILDREN = [
  <SocialBar.Icon
    key={1}
    tooltip="Facebook"
    icon={<Facebook href="https://www.facebook.com/sharer/sharer.php?u=wix.com" />}
  />,
  <SocialBar.Icon
    key={2}
    tooltip="Instagram"
    icon={<Instagram />}
    href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
  />,

  <SocialBar.Icon
    key={3}
    tooltip="Linkedin"
    icon={<Linkedin />}
    href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
  />,

  <SocialBar.Icon
    key={5}
    tooltip="Pinterest"
    icon={<Pinterest />}
    href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
  />,
];

const CHILDREN = [
  {
    label: 'with copy url button and tumblr',
    value: [
      ...DEFAULT_CHILDREN,
      <SocialBar.Icon
        key={4}
        tooltip="Tumblr"
        icon={<Tumblr />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />,
      <CopyUrlButton
        key={6}
        tooltipText="Copy Link"
        successText="Link Copied"
        url="https://google.com"
      />,
    ],
  },
  {
    label: 'without copy url button and tumblr',
    value: [...DEFAULT_CHILDREN],
  },
];

/* tslint:enable */

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'SocialBar',
  component: SocialBar,
  componentPath: '../SocialBar.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-SocialBar',
    theme: 'light',
    children: CHILDREN[0].value,
  }),
  exampleProps: {
    theme: ['light', 'dark'],
    children: CHILDREN,
  },
  dataHook: 'storybook-SocialBar',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`SocialBar` is a component allowing to render a bar with icons of social media sites.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Example', source: examples.example },
            { title: 'Mobile', source: examples.mobileExample },
          ].map(code),
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
              title: 'SocialBar Panel',
              example: <SocialBarWiringExample />,
              rawSource: SocialBarWiringExampleRaw,
              rawCSSSource: SocialBarWiringExampleCSSRaw,
              params: {
                colors: [],
                fonts: [],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
