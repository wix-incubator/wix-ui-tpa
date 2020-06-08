import * as React from 'react';
import { Popover, PopoverProps } from '../';
import styles from './PopoverWiringExample.st.css';

const defaultProps: PopoverProps = {
  onClose: () => {},
};

export const PopoverWiringExample = () => {
  return (
      <div>
        <Popover {...defaultProps} {...styles('root', {})}>
          <h1>Today Events</h1>
          <div>Getting the cake</div>
          <div>First sight wedding</div>
          <div>Stuido workout</div>
        </Popover>
      </div>
  );
};
