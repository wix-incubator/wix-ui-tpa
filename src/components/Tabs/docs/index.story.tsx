import * as React from 'react';
import {
  description,
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  example as baseExample,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { Tabs, SKIN, ALIGNMENT, VARIANT } from '..';
import * as TabsSource from '!raw-loader!../Tabs.tsx';
import * as examples from './examples';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { allComponents } from '../../../../stories/utils/allComponents';
import { TabsExtendedExample } from './TabsExtendedExample';
import * as ExtendedRawSource from '!raw-loader!./TabsExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./TabsExtendedExample.st.css';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const example = (config, extraContext = {}) =>
  baseExample({
    components: { ...allComponents, ...extraContext },
    compact: true,
    ...config,
  });

const items = Array(20)
  .fill('')
  .map((item, index) => ({ title: `Title ${index + 1}` }));

const anchorItems = Array.from({ length: 5 }, (item, index) => ({
  title: `Anchor ${index + 1}`,
  href: `/some-href-${index + 1}`,
  target: '_blank',
  rel: 'noopener noreferrer',
}));

const exampleItems = [
  { label: 'few items', value: items.slice(0, 4) },
  { label: 'many items', value: items },
  { label: 'with anchors', value: anchorItems },
];

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Tabs',
  component: storyComponent(Tabs),
  source: TabsSource,
  componentPath: '../Tabs.tsx',
  componentProps: (setState) => ({
    dataHook: 'storybook-Tabs',
    items: exampleItems[1].value,
    onTabClick: (selectedTabIndex) => {
      setState({ activeTabIndex: selectedTabIndex });
    },
    activeTabIndex: 0,
    skin: SKIN.fullUnderline,
    alignment: ALIGNMENT.center,
    variant: VARIANT.fit,
  }),
  exampleProps: {
    skin: Object.keys(SKIN).map((key) => SKIN[key]),
    alignment: Object.keys(ALIGNMENT).map((key) => ALIGNMENT[key]),
    variant: Object.keys(VARIANT).map((key) => VARIANT[key]),
    items: exampleItems,
  },

  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description('A Tab navigation component'),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Skins',
              description: 'The Tabs component has different skins to apply',
              source: examples.skins,
            },
            {
              title: 'Alignment',
              description:
                'The Tabs component supports `left`, `right` and `center` alignments',
              source: examples.alignment,
            },
            {
              title: 'Width Variants',
              description:
                'The Tabs widths can be equally distributed, or can fit the Tab content',
              source: examples.variants,
            },
            {
              title: 'Navigation Arrows',
              description:
                "Arrow icons appear when items can't all fit the container",
              source: examples.scroll,
            },
            {
              title: 'Tabs links',
              description: 'Render anchors',
              source: examples.anchors,
            },
          ].map(example),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground(), autoSettingsPanel()] },
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              example: <TabsExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              title: 'Tabs Extended',
              params: {
                colors: [
                  {
                    label: 'Tab Text Color',
                    wixParam: 'textColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Selected Tab Indicator Border Color',
                    wixParam: 'selectedTabIndicatorColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Indicator Border Color',
                    wixParam: 'indicatorColor',
                    defaultColor: 'color-5',
                  },
                ],
                fonts: [
                  {
                    label: 'Tab Text Font',
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
