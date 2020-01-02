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
import * as CopyUrlButtonWiringExampleRaw from '!raw-loader!./CopyUrlButtonWiringExample.tsx';
import * as CopyUrlButtonWiringExampleCSSRaw from '!raw-loader!./CopyUrlButtonWiringExample.st.css';
import { CopyUrlButtonWiringExample } from './CopyUrlButtonWiringExample';
import { CopyUrlButton } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components/Share',
  storyName: 'CopyUrlButton',
  component: CopyUrlButton,
  componentPath: '../CopyUrlButton.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-CopyUrlButton',
    url: 'wix.com',
    tooltipText: 'Copy link',
    successText: 'Link Copied',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-CopyUrlButton',
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
              title: 'CopyUrlButton Panel',
              example: <CopyUrlButtonWiringExample />,
              rawSource: CopyUrlButtonWiringExampleRaw,
              rawCSSSource: CopyUrlButtonWiringExampleCSSRaw,
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
