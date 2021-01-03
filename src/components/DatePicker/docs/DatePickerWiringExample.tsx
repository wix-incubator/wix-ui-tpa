import * as React from 'react';
import { DatePicker } from '../';
import { classes } from './DatePickerWiringExample.st.css';

export const DatePickerWiringExample = class DatePickerExample extends React.Component {
  state = {
    value: new Date(),
  };
  _onChange = date => this.setState({ value: date });

  render() {
    const { value } = this.state;
    return (
      <DatePicker
        className={classes.root}
        value={value}
        onChange={this._onChange}
      />
    );
  }
};
