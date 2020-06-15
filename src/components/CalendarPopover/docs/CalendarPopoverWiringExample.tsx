import * as React from 'react';
import { CalendarPopover, CalendarPopoverProps, Sides } from '..';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';
import styles from './CalendarPopoverWiringExample.st.css';

const defaultProps: CalendarPopoverProps = {
  onClose: () => {},
};

export const CalendarPopoverWiringExample = () => {
  return (
    <div {...styles('flexContainer', {})}>
      <div>
        <h1>Left To Right</h1>
        <CalendarPopover
          isShown
          title="Today Events"
          {...defaultProps}
          {...styles('root', {})}
        >
          <div>Getting the cake</div>
          <div>First sight wedding</div>
          <div>Stuido workout</div>
        </CalendarPopover>
      </div>
      <div>
        <h1>Right To Left</h1>
        <TPAComponentsProvider value={{ rtl: true }}>
          <CalendarPopover
            isShown
            title="Today Events"
            {...defaultProps}
            {...styles('root', {})}
            arrowSide={Sides.Right}
          >
            <div>Getting the cake</div>
            <div>First sight wedding</div>
            <div>Stuido workout</div>
          </CalendarPopover>
        </TPAComponentsProvider>
      </div>
    </div>
  );
};
