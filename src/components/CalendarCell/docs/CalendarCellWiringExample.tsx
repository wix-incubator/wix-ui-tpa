import * as React from 'react';
import { CalendarCell, Times } from '../';
import styles from './CalendarCellWiringExample.st.css';

export const CalendarCellWiringExample = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ width: '135px' }}>
        <h4>Default Day</h4>
        <CalendarCell {...styles('root')} time={'17'} />
      </div>
      <div style={{ width: '135px' }}>
        <h4>Current Day</h4>
        <CalendarCell
          timeType={Times.currentDay}
          {...styles('root')}
          time={'17'}
        />
      </div>
    </div>
  );
};
