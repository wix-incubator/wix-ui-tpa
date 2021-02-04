import * as React from 'react';

import { Popover, TriggerAction } from '../';
import { Text } from '../../Text';
import { ToggleSwitch } from '../../ToggleSwitch';

import { classes } from './PopoverWiringExample.st.css';

export const PopoverWiringExample = () => {
  const [isWired, setIsWired] = React.useState(true);

  return (
    <>
      <label htmlFor="wireToggle">
        <Text>Wire to site colors</Text>
      </label>
      <ToggleSwitch
        id="wireToggle"
        checked={isWired}
        onChange={() => setIsWired(!isWired)}
      />
      <br />
      <Popover
        placement="top"
        className={classes.root}
        triggerAction={TriggerAction.hover}
        wiredToSiteColors={isWired}
      >
        <Popover.Element>
          <Text>This is the Popover.Element</Text>
        </Popover.Element>
        <Popover.Content>
          <div>This is the Popover.Content</div>
        </Popover.Content>
      </Popover>
    </>
  );
};
