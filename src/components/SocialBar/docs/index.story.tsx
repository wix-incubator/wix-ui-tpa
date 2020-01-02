import * as React from 'react';
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
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as SocialBarWiringExampleRaw from '!raw-loader!./SocialBarWiringExample.tsx';
import * as SocialBarWiringExampleCSSRaw from '!raw-loader!./SocialBarWiringExample.st.css';
import { SocialBarWiringExample } from './SocialBarWiringExample';
import { SocialBar } from '../';
import { Share, SocialIcons } from '../../../assets/icons';
import { CopyUrlButton } from '../../CopyUrlButton';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

  /* tslint:disable */

const DEFAULT_CHILDREN = [
  <SocialBar.Icon
    key={1}
    tooltip="Facebook"
    icon={
      <SocialIcons.Facebook href="https://www.facebook.com/sharer/sharer.php?u=wix.com" />
    }
  />,
  <SocialBar.Icon
    key={2}
    tooltip="Instagram"
    icon={<SocialIcons.Instagram />}
    href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
  />,

  <SocialBar.Icon
    key={3}
    tooltip="Linkedin"
    icon={<SocialIcons.Linkedin />}
    href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
  />,

  <SocialBar.Icon
    key={5}
    tooltip="Pinterest"
    icon={<SocialIcons.Pinterest />}
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
        icon={<SocialIcons.Tumblr />}
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
  category: 'Components/Share',
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
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
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
