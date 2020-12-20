import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
// import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { ThemedDatePicker } from './';

visualize('ThemedDatePicker', () => {
  story('simple', () => {
    snap('default props', <ThemedDatePicker />);
    snap('custom buttonText', <ThemedDatePicker />);
    // snap('mobile', (
    //   <TPAComponentsProvider value={{mobile: true}}>
    //     <ThemedDatePicker buttonText={'Some custom text'} />
    //   </TPAComponentsProvider>
    // ));
    // snap('rtl', (
    //   <TPAComponentsProvider value={{rtl: true}}>
    //     <ThemedDatePicker buttonText={'Some custom text'} />
    //   </TPAComponentsProvider>
    // ));
  });
});
