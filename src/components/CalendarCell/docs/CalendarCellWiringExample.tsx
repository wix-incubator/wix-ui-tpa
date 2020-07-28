import * as React from 'react';
import { CalendarCell, Times } from '../';
import { st, classes } from './CalendarCellWiringExample.st.css';

export const CalendarCellWiringExample = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ width: '135px' }}>
        <h4>Default Day</h4>
        <CalendarCell className={st(classes.root)} title={'17'} />
      </div>
      <div style={{ width: '135px' }}>
        <h4>Current Day</h4>
        <CalendarCell
          timeType={Times.today}
          className={st(classes.root)}
          title={'17'}
        />
      </div>
    </div>
  );
};
