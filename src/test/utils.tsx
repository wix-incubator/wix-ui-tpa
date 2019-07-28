import * as React from 'react';
import { TPAComponentsProvider } from '../components/TPAComponentsConfig';

export const TPAComponentsWrapper = ({ mobile = false, rtl = false }) => {
  return Component => {
    return (
      <TPAComponentsProvider value={{ mobile, rtl }}>
        {Component}
      </TPAComponentsProvider>
    );
  };
};

export interface StylableUnidriverUtilClass {
  getStyleState(UniDriver, string): Promise<string>;
  hasStyleState(UniDriver, string): Promise<boolean>;
}
