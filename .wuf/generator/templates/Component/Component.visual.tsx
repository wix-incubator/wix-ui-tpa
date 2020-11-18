import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
// import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { {%ComponentName%} } from './';

visualize('{%ComponentName%}', () => {
  story('simple', () => {
    snap('default props', <{%ComponentName%} />);
    snap('custom buttonText', <{%ComponentName%} buttonText={'Some custom text'} />);
    // snap('mobile', (
    //   <TPAComponentsProvider value={{mobile: true}}>
    //     <{%ComponentName%} buttonText={'Some custom text'} />
    //   </TPAComponentsProvider>
    // ));
    // snap('rtl', (
    //   <TPAComponentsProvider value={{rtl: true}}>
    //     <{%ComponentName%} buttonText={'Some custom text'} />
    //   </TPAComponentsProvider>
    // ));
  });
});
