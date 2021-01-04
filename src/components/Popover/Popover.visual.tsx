import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
// import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { Popover } from './';
import { classes } from './docs/PopoverWiringExample.st.css';
import { Text } from '../Text';

visualize('Popover', () => {
  story('simple', () => {
    snap(
      'default props',
      <Popover className={classes.root} placement="bottom">
        <Popover.Element>
          <Text>This is the Popover.Element</Text>
        </Popover.Element>
        <Popover.Content>
          <div>This is the Popover.Content</div>
        </Popover.Content>
      </Popover>,
    );
    snap(
      'custom buttonText',
      <Popover className={classes.root} placement="bottom">
        <Popover.Element>
          <Text>This is the Popover.Element</Text>
        </Popover.Element>
        <Popover.Content>
          <div>This is the Popover.Content</div>
        </Popover.Content>
      </Popover>,
    );
    // snap('mobile', (
    //   <TPAComponentsProvider value={{mobile: true}}>
    //     <Popover buttonText={'Some custom text'} />
    //   </TPAComponentsProvider>
    // ));
    // snap('rtl', (
    //   <TPAComponentsProvider value={{rtl: true}}>
    //     <Popover buttonText={'Some custom text'} />
    //   </TPAComponentsProvider>
    // ));
  });
});
