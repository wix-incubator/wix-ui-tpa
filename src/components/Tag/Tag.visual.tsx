import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
// import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { Tag } from './';

visualize('Tag', () => {
  story('simple', () => {
    snap('default props', <Tag>Tag Name</Tag>);
    snap('custom buttonText', <Tag>Some custom text</Tag>);
    // snap('mobile', (
    //   <TPAComponentsProvider value={{mobile: true}}>
    //     <Tag>Some custom text</Tag>
    //   </TPAComponentsProvider>
    // ));
    // snap('rtl', (
    //   <TPAComponentsProvider value={{rtl: true}}>
    //     <Tag>Some custom text</Tag>
    //   </TPAComponentsProvider>
    // ));
  });
});
