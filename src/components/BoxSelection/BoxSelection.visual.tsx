import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
// import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { BoxSelection } from './';

visualize('BoxSelection', () => {
  story('simple', () => {
    snap('default props', <BoxSelection name="hours" />);
    // snap('mobile', (
    //   <TPAComponentsProvider value={{mobile: true}}>
    //     <BoxSelection buttonText={'Some custom text'} />
    //   </TPAComponentsProvider>
    // ));
    // snap('rtl', (
    //   <TPAComponentsProvider value={{rtl: true}}>
    //     <BoxSelection buttonText={'Some custom text'} />
    //   </TPAComponentsProvider>
    // ));
  });
});
