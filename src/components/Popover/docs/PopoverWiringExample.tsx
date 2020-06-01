import * as React from 'react';
import { Popover } from '../';
import styles from './PopoverWiringExample.st.css';

export const PopoverWiringExample = () => {
  return (
    <div {...styles('flexContainer', {})}>
      <div>
        <h1>Left To Right</h1>
        <Popover {...styles('root', {})}>
          <h1>Today Events</h1>
          <div>Getting the cake</div>
          <div>First sight wedding</div>
          <div>Stuido workout</div>
        </Popover>
      </div>
      <div>
        <h1>Right To Left</h1>
        <Popover {...styles('root', {})} rightToLeft>
          <h1>Today Events</h1>
          <div>Getting the cake</div>
          <div>First sight wedding</div>
          <div>Stuido workout</div>
        </Popover>
      </div>
    </div>
  );
};
