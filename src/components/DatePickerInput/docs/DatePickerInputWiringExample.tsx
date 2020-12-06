import * as React from 'react';
import { DatePickerInput } from '../';
import { classes } from './DatePickerInputWiringExample.st.css';

export const DatePickerInputWiringExample = () => {
  return (
    <DatePickerInput
      className={classes.root}
      value={new Date()}
      onChange={() => {}}
    />
  );
};
