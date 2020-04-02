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
import * as FloatingDropdownWiringExampleRaw from '!raw-loader!./FloatingDropdownWiringExample.tsx';
import * as FloatingDropdownWiringExampleCSSRaw from '!raw-loader!./FloatingDropdownWiringExample.st.css';
import { FloatingDropdownWiringExample } from './FloatingDropdownWiringExample';
import { FloatingDropdown } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'FloatingDropdown',
  component: FloatingDropdown,
  componentPath: '../FloatingDropdown.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-FloatingDropdown',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-FloatingDropdown',
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
            {title: 'MinWidth', source: examples.minWidth},
            {title: 'MaxWidth', source: examples.maxWidth}
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
              title: 'FloatingDropdown Panel',
              example: <FloatingDropdownWiringExample />,
              rawSource: FloatingDropdownWiringExampleRaw,
              rawCSSSource: FloatingDropdownWiringExampleCSSRaw,
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
