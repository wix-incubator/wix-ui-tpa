import * as React from 'react';
import { CalendarPopover, CalendarPopoverProps, Sides } from '..';
import { Event } from '../../Event';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';
import { st, classes } from './CalendarPopoverWiringExample.st.css';

const defaultProps: CalendarPopoverProps = {
  onClose: () => {},
  closeAriaLabel: 'close',
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
          <Event time={'11:00'} title={"Michal's birthday party"} />
          <Event time={'19:00'} title={'Movies night'} />
          <Event time={'21:00'} title={'Football tournament'} />
        </CalendarPopover>
      </div>
      <div dir={'rtl'}>
        <h1>Right To Left</h1>
        <TPAComponentsProvider value={{ rtl: true }}>
          <CalendarPopover
            isShown
            title="Today Events"
            {...defaultProps}
            className={classes.root}
            arrowSide={Sides.Right}
          >
            <Event time={'11:00'} title={"Michal's birthday party"} />
            <Event time={'19:00'} title={'Movies night'} />
            <Event time={'21:00'} title={'Football tournament'} />
          </CalendarPopover>
        </TPAComponentsProvider>
      </div>
    </div>
  );
};
