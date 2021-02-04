import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';

import { Text } from '../Text';
import { TPAComponentsProvider } from '../TPAComponentsConfig';

import { Popover } from './Popover';
import { classes } from './docs/PopoverWiringExample.st.css';

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
    snap(
      'rtl',
      <TPAComponentsProvider value={{ rtl: true }}>
        <Popover className={classes.root} placement="bottom">
          <Popover.Element>
            <Text>This is the Popover.Element</Text>
          </Popover.Element>
          <Popover.Content>
            <div>This is the Popover.Content</div>
          </Popover.Content>
        </Popover>
      </TPAComponentsProvider>,
    );
  });
});
