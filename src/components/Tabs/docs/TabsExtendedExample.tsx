import * as React from 'react';
import { Tabs, TabsProps } from '../Tabs';
import { st, classes } from './TabsExtendedExample.st.css';

export const TabsExtendedExample: React.FunctionComponent<TabsProps> = props => (
  <Tabs className={st(classes.root)} {...props} />
);
