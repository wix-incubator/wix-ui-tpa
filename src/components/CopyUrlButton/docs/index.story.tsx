import * as CopyUrlButtonWiringExampleCSSRaw from '!raw-loader!./CopyUrlButtonWiringExample.st.css';
import * as CopyUrlButtonWiringExampleRaw from '!raw-loader!./CopyUrlButtonWiringExample.tsx';
import * as React from 'react';
import {
  api,
  code as baseCode,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { CopyUrlButton } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { CopyUrlButtonWiringExample } from './CopyUrlButtonWiringExample';
import * as examples from './examples';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
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
          description(
            '`CopyUrlButton` is a component allowing to render a button for copying a link.',
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
