import * as React from 'react';

import { Calendar } from '../index';
import styles from './ExtendedExample.st.css';
import { CalendarLayouts } from '../Calendar';

export const ExtendedExample = props => (
  <div>
    <Calendar
      {...styles('root', {}, props)}
      layout={CalendarLayouts.weekly}
      calendarTitle="Example"
      selectorTitle="Time Period"
    />
  </div>
);
