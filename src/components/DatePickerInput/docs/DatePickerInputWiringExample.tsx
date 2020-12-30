import * as React from 'react';
import { DatePickerInput } from '../';
import { classes } from './DatePickerInputWiringExample.st.css';

export const DatePickerInputWiringExample = class DatePickerInputExample extends React.Component {
  state = {
    value: new Date(),
  };

  _onChange = (date) => this.setState({ value: date });

  render() {
    const { value } = this.state;
    return (
      <DatePickerInput
        className={classes.root}
        value={value}
        onChange={this._onChange}
      />
    );
  }
};
