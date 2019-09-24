import * as React from 'react';
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
import { Tabs, SKIN, ALIGNMENT, VARIANT } from '..';
import css from '!raw-loader!../Tabs.st.css';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { WiringTab } from '../../../../stories/utils/WiringTab';
import * as TabsSource from '!raw-loader!../Tabs.tsx';
import { Examples } from './examples';

import * as ExtendedRawSource from '!raw-loader!./TabsExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./TabsExtendedExample.st.css';
import { TabsExtendedExample } from './TabsExtendedExample';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const items = Array(10)
  .fill('')
  .map((item, index) => ({ title: `Title ${index + 1}` }));

const exampleItems = [
  { label: 'few items', value: items.slice(0, 4) },
  { label: 'many items', value: items },
];

export default {
  category: 'Components',
  storyName: 'Tabs',
  component: Tabs,
  source: TabsSource,
  componentPath: '../Tabs.tsx',
  componentProps: setState => ({
    dataHook: 'storybook-Tabs',
    items: exampleItems[1].value,
    onTabClick: selectedTabIndex => {
      setState({ activeTabIndex: selectedTabIndex });
    },
    activeTabIndex: 0,
    skin: SKIN.fullUnderline,
    alignment: ALIGNMENT.center,
    variant: VARIANT.fit,
  }),
  exampleProps: {
    skin: Object.keys(SKIN).map(key => SKIN[key]),
    alignment: Object.keys(ALIGNMENT).map(key => ALIGNMENT[key]),
    variant: Object.keys(VARIANT).map(key => VARIANT[key]),
    items: exampleItems,
  },
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample("import { Tabs } from 'wix-ui-tpa/Tabs';"),

          divider(),

          title('Examples'),

          // ...[{ title: 'Example', source: Examples }].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Wiring',
          sections: [WiringTab({ component: <Tabs items={[]} />, css })],
        },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Tabs Panel',
              example: <TabsExtendedExample items={items} />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              params: {
                colors: [
                  {
                    label: 'Tabs text Color',
                    wixParam: 'textColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Tabs selected indicator Color',
                    wixParam: 'selectedTabIndicatorColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Tabs indicator Color',
                    wixParam: 'indicatorColor',
                    defaultColor: 'color-1',
                  },
                ],
                fonts: [
                  {
                    label: 'Tabs Text Font',
                    wixParam: 'textFont',
                    defaultFont: 'arial',
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
