import * as React from 'react';
import { CalendarCell, Times } from '../';
import { st, classes } from './CalendarCellWiringExample.st.css';

export const CalendarCellWiringExample = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ width: '135px' }}>
        <h4>Past Month</h4>
        <CalendarCell
          className={st(classes.root)}
          timeType={Times.pastDate}
          title={'17'}
        />
      </div>
      <div style={{ width: '135px' }}>
        <h4>Current Month</h4>
        <CalendarCell className={st(classes.root)} current title={'17'} />
      </div>
      <div style={{ width: '135px' }}>
        <h4>Current Day</h4>
        <CalendarCell
          timeType={Times.today}
          className={st(classes.root)}
          title={'17'}
        />
      </div>
      <div style={{ width: '135px' }}>
        <h4>Future Month</h4>
        <CalendarCell
          timeType={Times.futureDate}
          className={st(classes.root)}
          title={'17'}
        />
      </div>
    </div>
  );
};
