import * as React from 'react';
import { DatePicker } from '../';
import { classes } from './DatePickerWiringExample.st.css';

export const DatePickerWiringExample = () => {
  return (
    <DatePicker
      className={classes.component}
      value={new Date()}
      onChange={() => {}}
    />
  );
};
