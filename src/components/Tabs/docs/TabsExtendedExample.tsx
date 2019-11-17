import * as React from 'react';
import { Tabs, TabsProps } from '../Tabs';
import extendedStyles from './TabsExtendedExample.st.css';

export const TabsExtendedExample: React.FunctionComponent<TabsProps> = props => (
  <Tabs {...props} {...extendedStyles('root', {}, props)} />
);
