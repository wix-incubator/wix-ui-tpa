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
import * as ModalWiringExampleRaw from '!raw-loader!./ModalWiringExample.tsx';
import * as ModalWiringExampleCSSRaw from '!raw-loader!./ModalWiringExample.st.css';
import { ModalWiringExample } from './ModalWiringExample';
import { Modal } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Modal',
  component: Modal,
  componentPath: '../Modal.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Modal',
  }),
  exampleProps: {
    isOpen: false,
  },
  dataHook: 'storybook-Modal',
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
            { title: 'Minimum height', source: examples.minHeightExample },
            { title: 'Maximum height', source: examples.maxHeightExample },
            { title: 'RTL example', source: examples.rtlExample },
            {
              title: 'Without close button',
              source: examples.withoutCloseButtonExample,
            },
            {
              title: 'Without background',
              source: examples.withoutBackgroundExample,
            },
            { title: 'In full screen', source: examples.inFullScreenExample },
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
              title: 'Modal Panel',
              example: <ModalWiringExample />,
              rawSource: ModalWiringExampleRaw,
              rawCSSSource: ModalWiringExampleCSSRaw,
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
