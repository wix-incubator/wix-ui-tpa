import * as ShareButtonWiringExampleCSSRaw from '!raw-loader!./ShareButtonWiringExample.st.css';
import * as ShareButtonWiringExampleRaw from '!raw-loader!./ShareButtonWiringExample.tsx';
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
import { ShareButton } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import * as examples from './examples';
import { ShareButtonWiringExample } from './ShareButtonWiringExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'ShareButton',
  component: ShareButton,
  componentPath: '../ShareButton.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ShareButton',
    shareData: {
      title: 'Share title',
      url: 'https://wix.com',
    },
    withIcon: true,
    onClick: (sharePromise) => {
      if (!sharePromise) {
        alert('share clicked');
      }
    },
    text: 'Share',
  }),
  exampleProps: {
    withIcon: false,
  },
  dataHook: 'storybook-ShareButton',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`ShareButton` is a component allowing to render a button for sharing data using the [`Navigator.share`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) method.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Icon + Text', source: examples.exampleIconAndText },
            { title: 'Icon', source: examples.exampleIcon },
            { title: 'Text', source: examples.exampleText },
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
              title: 'ShareButton Panel',
              example: <ShareButtonWiringExample />,
              rawSource: ShareButtonWiringExampleRaw,
              rawCSSSource: ShareButtonWiringExampleCSSRaw,
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
