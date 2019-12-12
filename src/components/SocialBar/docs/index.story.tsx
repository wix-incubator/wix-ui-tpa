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

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'SocialBar',
  component: SocialBar,
  componentPath: '../SocialBar.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-SocialBar',
  }),
  exampleProps: {
    //
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

          ...[{ title: 'Example', source: examples.example }].map(code),
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
