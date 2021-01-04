import * as React from 'react';

import { Popover, TriggerAction } from '../';
import { Text } from '../../Text';

import { classes } from './PopoverWiringExample.st.css';

export const PopoverWiringExample = () => {
  return (
    <Popover
      placement="bottom"
      className={classes.root}
      triggerAction={TriggerAction.hover}
    >
      <Popover.Element>
        <Text>This is the Popover.Element</Text>
      </Popover.Element>
      <Popover.Content>
        <div>This is the Popover.Content</div>
      </Popover.Content>
    </Popover>
  );
};
