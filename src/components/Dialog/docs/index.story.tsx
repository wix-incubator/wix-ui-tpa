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
import * as DialogWiringExampleRaw from '!raw-loader!./DialogWiringExample.tsx';
import * as DialogWiringExampleCSSRaw from '!raw-loader!./DialogWiringExample.st.css';
import { DialogWiringExample } from './DialogWiringExample';
import { Dialog } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Dialog',
  component: Dialog,
  componentPath: '../Dialog.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Dialog',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-Dialog',
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
              title: 'Dialog Panel',
              example: <DialogWiringExample />,
              rawSource: DialogWiringExampleRaw,
              rawCSSSource: DialogWiringExampleCSSRaw,
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
