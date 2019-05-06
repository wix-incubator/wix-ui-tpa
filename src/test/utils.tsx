import * as React from 'react';
import {TPAComponentsProvider} from '../components/TPAComponentsConfig';

export const TPAComponentsWrapper = ({mobile = false}) => {
  return Component => {
    return (
      <TPAComponentsProvider value={{ mobile }}>
        {Component}
      </TPAComponentsProvider>
    );
  };
};
