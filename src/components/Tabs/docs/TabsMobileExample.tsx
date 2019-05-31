import * as React from 'react';
import { Tabs, TabsProps } from '../Tabs';
import extendedStyles from './TabsExtendedExample.st.css';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';

export const TabsMobileExample: React.FunctionComponent<TabsProps> = props => {
  return (
    <div style={{ width: 480 }}>
      <TPAComponentsProvider value={{ mobile: true }}>
        <Tabs {...props} {...extendedStyles('root', {}, props)} />
      </TPAComponentsProvider>
    </div>
  );
};
