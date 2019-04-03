import * as React from 'react';
import {Tabs, SKIN , CONTENT_ALIGNMENT, CONTENT_WIDTH} from '../src/components/Tabs';
import * as TabsSource from '!raw-loader!../src/components/Tabs/Tabs.tsx';
import {Examples} from './Tabs';

const items = [
  {id: 'some-id-1', title: 'Title 1', dataHook: 'tab-item-1'},
  {id: 'some-id-2', title: 'Title 2' , dataHook: 'tab-item-2'},
  {id: 'some-id-3', title: 'Title 3' , dataHook: 'tab-item-3'},
  {id: 'some-id-4', title: 'Title 4', dataHook: 'tab-item-4'},
];

let activeId = 'some-id-1';

export default {
  category: 'Components',
  storyName: 'Tabs',
  component: Tabs,
  source: TabsSource,
  componentPath: '../src/components/Tabs/Tabs.tsx',
  componentProps: (setState) => ({
    items,
    onClick: (item) => {
      setState({activeId: item.id})
    },
    activeId,
    skin: SKIN.clear,
    contentAlignment: CONTENT_ALIGNMENT.center,
    contentWidth: CONTENT_WIDTH.shrink,
  }),
  exampleProps: {
    skin: Object.keys(SKIN).map(key => SKIN[key]),
    contentAlignment: Object.keys(CONTENT_ALIGNMENT).map(key => CONTENT_ALIGNMENT[key]),
    contentWidth: Object.keys(CONTENT_WIDTH).map(key => CONTENT_WIDTH[key]),
  },
  examples: (
    <Examples/>
  )
};
