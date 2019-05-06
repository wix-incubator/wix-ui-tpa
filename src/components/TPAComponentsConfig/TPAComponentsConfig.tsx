import * as React from 'react';

export interface TPAComponentsConfig {
  mobile: boolean;
}

export const TPAComponentsContext = React.createContext<TPAComponentsConfig>({
  mobile: false,
});

export const TPAComponentsProvider = TPAComponentsContext.Provider;

export const TPAComponentsConsumer = TPAComponentsContext.Consumer;



