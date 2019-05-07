import * as React from 'react';
import { Tabs, TabsProps } from '../../src/components/Tabs';
import extendedStyles from './TabsExtendedExample.st.css';
import { TPAComponentsProvider } from '../../src/components/TPAComponentsConfig';

export const TabsMobileExample: React.SFC<TabsProps> = props => {
  return (
    <div style={{ width: 480 }}>
      <TPAComponentsProvider value={{ mobile: true }}>
        <Tabs {...props} {...extendedStyles('root', {}, props)} />
      </TPAComponentsProvider>
    </div>
  );
};
