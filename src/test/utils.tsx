import { UniDriver } from '@unidriver/core';
import * as React from 'react';
import { TPAComponentsProvider } from '../components/TPAComponentsConfig';

export const TPAComponentsWrapper = ({ mobile = false, rtl = false }) => {
  return (Component) => {
    return (
      <TPAComponentsProvider value={{ mobile, rtl }}>
        {Component}
      </TPAComponentsProvider>
    );
  };
};

export const hasDataAttr = async (
  base: UniDriver,
  field: string,
  expectedValue: any,
): Promise<boolean> => {
  const fieldValue = await base.attr(`data-${field}`);
  return fieldValue === expectedValue;
};

export const hasMobile = async (base: UniDriver): Promise<boolean> => {
  return hasDataAttr(base, 'mobile', 'true');
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
