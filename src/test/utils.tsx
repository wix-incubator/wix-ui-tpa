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
