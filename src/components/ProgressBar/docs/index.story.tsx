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
import * as ProgressBarWiringExampleRaw from '!raw-loader!./ProgressBarWiringExample.tsx';
import * as ProgressBarWiringExampleCSSRaw from '!raw-loader!./ProgressBarWiringExample.st.css';
import { ProgressBarWiringExample } from './ProgressBarWiringExample';
import { ProgressBar } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'ProgressBar',
  component: ProgressBar,
  componentPath: '../ProgressBar.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ProgressBar',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-ProgressBar',
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
              title: 'ProgressBar Panel',
              example: <ProgressBarWiringExample />,
              rawSource: ProgressBarWiringExampleRaw,
              rawCSSSource: ProgressBarWiringExampleCSSRaw,
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
