import * as React from 'react';
import { CalendarPopover, CalendarPopoverProps, Sides } from '..';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';
import { st, classes } from './CalendarPopoverWiringExample.st.css';

const defaultProps: CalendarPopoverProps = {
  onClose: () => {},
};

export const CalendarPopoverWiringExample = () => {
  return (
    <div className={st(classes.flexContainer)}>
      <div>
        <h1>Left To Right</h1>
        <CalendarPopover
          isShown
          title="Today Events"
          {...defaultProps}
          className={classes.root}
        >
          <div>Getting the cake</div>
          <div>First sight wedding</div>
          <div>Studio workout</div>
        </CalendarPopover>
      </div>
      <div>
        <h1>Right To Left</h1>
        <TPAComponentsProvider value={{ rtl: true }}>
          <CalendarPopover
            isShown
            title="Today Events"
            {...defaultProps}
            className={classes.root}
            arrowSide={Sides.Right}
          >
            <div>Getting the cake</div>
            <div>First sight wedding</div>
            <div>Studio workout</div>
          </CalendarPopover>
        </TPAComponentsProvider>
      </div>
    </div>
  );
};
