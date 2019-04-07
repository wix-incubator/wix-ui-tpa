import * as React from 'react';
import {Tabs, TabsProps} from '../../src/components/Tabs';
import extendedStyles from './TabsExtendedExample.st.css';

export const TabsExtendedExample: React.SFC<TabsProps> =  (props) => <Tabs {...props} {...extendedStyles('root', {}, props)}/>;
