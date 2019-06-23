import * as React from 'react';
import { Tabs, SKIN, ALIGNMENT, VARIANT } from '..';
import * as TabsSource from '!raw-loader!../Tabs.tsx';
import { Examples } from './examples';

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
  examples: <Examples />,
};
