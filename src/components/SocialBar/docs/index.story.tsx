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
import { IconButton } from '../../IconButton';
import { Share, SocialIcons } from '../../../assets/icons';
import { CopyUrlButton } from '../../CopyUrlButton';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components/Share',
  storyName: 'SocialBar',
  component: SocialBar,
  componentPath: '../SocialBar.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-SocialBar',
    theme: 'light',
    children: (
      <>
        <SocialBar.Icon tooltip="Facebook">
          <IconButton
            icon={<SocialIcons.Facebook />}
            as="a"
            href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
          />
        </SocialBar.Icon>
        <SocialBar.Icon tooltip="Instagram">
          <IconButton
            icon={<SocialIcons.Instagram />}
            as="a"
            href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
          />
        </SocialBar.Icon>
        <SocialBar.Icon tooltip="Linkedin">
          <IconButton
            icon={<SocialIcons.Linkedin />}
            as="a"
            href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
          />
        </SocialBar.Icon>
        <SocialBar.Icon tooltip="Tumblr">
          <IconButton
            icon={<SocialIcons.Tumblr />}
            as="a"
            href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
          />
        </SocialBar.Icon>
        <SocialBar.Icon tooltip="Pinterest">
          <IconButton
            icon={<SocialIcons.Pinterest />}
            as="a"
            href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
          />
        </SocialBar.Icon>
        <SocialBar.Icon>
          <CopyUrlButton
            tooltipText="Copy Link"
            successText="Link Copied"
            url="https://google.com"
          />
        </SocialBar.Icon>
      </>
    ),
  }),
  exampleProps: {
    theme: ['light', 'dark'],
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
