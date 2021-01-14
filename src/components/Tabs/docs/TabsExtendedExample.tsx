import * as React from 'react';
import { Tabs, TabsProps } from '../Tabs';
import { classes } from './TabsExtendedExample.st.css';

const items = [
  { title: 'Title 1', id: 'tab-1' },
  { title: 'Title 2', id: 'tab-2' },
  { title: 'Title 3', id: 'tab-3' },
  { title: 'Title 4', id: 'tab-4' },
];

export const TabsExtendedExample: React.FunctionComponent<
  Partial<TabsProps>
> = (props) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Tabs
      {...props}
      items={items}
      className={classes.root}
      activeTabIndex={activeTab}
      onTabClick={setActiveTab}
    />
  );
};
