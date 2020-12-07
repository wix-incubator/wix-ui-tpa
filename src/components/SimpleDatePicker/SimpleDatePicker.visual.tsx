import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
// import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { SimpleDatePicker } from './';

visualize('SimpleDatePicker', () => {
  story('simple', () => {
    snap('default props', <SimpleDatePicker />);
    snap('custom buttonText', <SimpleDatePicker buttonText={'Some custom text'} />);
    // snap('mobile', (
    //   <TPAComponentsProvider value={{mobile: true}}>
    //     <SimpleDatePicker buttonText={'Some custom text'} />
    //   </TPAComponentsProvider>
    // ));
    // snap('rtl', (
    //   <TPAComponentsProvider value={{rtl: true}}>
    //     <SimpleDatePicker buttonText={'Some custom text'} />
    //   </TPAComponentsProvider>
    // ));
  });
});
