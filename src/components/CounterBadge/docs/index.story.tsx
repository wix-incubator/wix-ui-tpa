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
import * as CounterBadgeWiringExampleRaw from '!raw-loader!./CounterBadgeWiringExample.tsx';
import * as CounterBadgeWiringExampleCSSRaw from '!raw-loader!./CounterBadgeWiringExample.st.css';
import { CounterBadgeWiringExample } from './CounterBadgeWiringExample';
import { CounterBadge, CounterBadgeTheme } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const exampleChildren = [
  {
    label: 'small number',
    value: 12,
  },
  {
    label: 'big number',
    value: 1000,
  },
];

export default {
  category: 'Components',
  storyName: 'CounterBadge',
  component: CounterBadge,
  componentPath: '../CounterBadge.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-CounterBadge',
    children: exampleChildren[0].value,
  }),
  exampleProps: {
    theme: Object.keys(CounterBadgeTheme),
    children: exampleChildren,
  },
  dataHook: 'storybook-CounterBadge',
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
              title: 'CounterBadge Panel',
              example: <CounterBadgeWiringExample />,
              rawSource: CounterBadgeWiringExampleRaw,
              rawCSSSource: CounterBadgeWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Primary Background Color',
                    wixParam: 'primaryBGColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Primary Text Color',
                    wixParam: 'primaryColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Secondary Background Color',
                    wixParam: 'secondaryBGColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Secondary Text Color',
                    wixParam: 'secondaryColor',
                    defaultColor: 'color-8',
                  },
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
