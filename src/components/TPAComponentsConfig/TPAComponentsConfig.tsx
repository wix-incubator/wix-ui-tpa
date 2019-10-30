import * as React from 'react';

export interface TPAComponentsConfig {
  mobile?: boolean;
  rtl?: boolean;
}

export const TPAComponentsContext = React.createContext<TPAComponentsConfig>({
  mobile: false,
  rtl: false,
});

export const TPAComponentsProvider = TPAComponentsContext.Provider;

export const TPAComponentsConsumer = TPAComponentsContext.Consumer;
