import * as React from 'react';
import { Popover, PopoverProps } from '../';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';
import styles from './PopoverWiringExample.st.css';

const defaultProps: PopoverProps = {
  onClose: () => {},
};

export const PopoverWiringExample = () => {
  return (
    <div {...styles('flexContainer', {})}>
      <div>
        <h1>Left To Right</h1>
        <Popover title="Today Events" {...defaultProps} {...styles('root', {})}>
          <div>Getting the cake</div>
          <div>First sight wedding</div>
          <div>Stuido workout</div>
        </Popover>
      </div>
      <div>
        <h1>Right To Left</h1>
        <TPAComponentsProvider value={{ rtl: true }}>
          <Popover
            title="Today Events"
            {...defaultProps}
            {...styles('root', {})}
          >
            <div>Getting the cake</div>
            <div>First sight wedding</div>
            <div>Stuido workout</div>
          </Popover>
        </TPAComponentsProvider>
      </div>
    </div>
  );
};
