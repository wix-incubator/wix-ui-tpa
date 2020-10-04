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
import * as AddItemWiringExampleRaw from '!raw-loader!./AddItemWiringExample.tsx';
import * as AddItemWiringExampleCSSRaw from '!raw-loader!./AddItemWiringExample.st.css';
import { AddItemWiringExample } from './AddItemWiringExample';
import { AddItem } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'AddItem',
  component: AddItem,
  componentPath: '../AddItem.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-AddItem',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-AddItem',
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
            { title: 'Mobile Example', source: examples.mobileExample },
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
              title: 'AddItem Panel',
              example: <AddItemWiringExample />,
              rawSource: AddItemWiringExampleRaw,
              rawCSSSource: AddItemWiringExampleCSSRaw,
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
