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
import * as ActionsMenuWiringExampleRaw from '!raw-loader!./ActionsMenuWiringExample.tsx';
import * as ActionsMenuWiringExampleCSSRaw from '!raw-loader!./ActionsMenuWiringExample.st.css';
import { ActionsMenuWiringExample } from './ActionsMenuWiringExample';
import { ActionsMenu } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'ActionsMenu',
  component: ActionsMenu,
  componentPath: '../ActionsMenu.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ActionsMenu',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-ActionsMenu',
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
              title: 'ActionsMenu Panel',
              example: <ActionsMenuWiringExample />,
              rawSource: ActionsMenuWiringExampleRaw,
              rawCSSSource: ActionsMenuWiringExampleCSSRaw,
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
