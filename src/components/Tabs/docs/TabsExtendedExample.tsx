import * as React from 'react';
import { Tabs, TabsProps } from '../Tabs';
import { classes } from './TabsExtendedExample.st.css';

export const TabsExtendedExample: React.FunctionComponent<TabsProps> = props => (
  <Tabs {...props} className={classes.root} />
);
