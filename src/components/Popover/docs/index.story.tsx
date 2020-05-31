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
import * as PopoverWiringExampleRaw from '!raw-loader!./PopoverWiringExample.tsx';
import * as PopoverWiringExampleCSSRaw from '!raw-loader!./PopoverWiringExample.st.css';
import { PopoverWiringExample } from './PopoverWiringExample';
import { Popover } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Popover',
  component: Popover,
  componentPath: '../Popover.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Popover',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-Popover',
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
              title: 'Popover Panel',
              example: <PopoverWiringExample />,
              rawSource: PopoverWiringExampleRaw,
              rawCSSSource: PopoverWiringExampleCSSRaw,
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
