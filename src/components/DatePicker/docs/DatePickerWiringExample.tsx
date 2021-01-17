import * as React from 'react';
import { DatePicker } from '../';
import { classes } from './DatePickerWiringExample.st.css';

export const DatePickerWiringExample = class DatePickerExample extends React.Component {
  state = {
    value: new Date(),
  };
  _onChange = (date) => this.setState({ value: date });

  render() {
    const { value } = this.state;
    return (
      <>
          <DatePicker
            className={classes.root}
            value={value}
            onChange={this._onChange}
          />
          <br/>
          <br/>
          <h3>Calendar With Indications:</h3>
          <br/>
          <DatePicker
            className={classes.root}
            value={value}
            onChange={this._onChange}
            renderDateIndication={date => (
                date <= new Date() ? (
                    <div className="Indications" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <div className="indication" style={{ borderRadius: '50%', width: '0.2em', height: '0.2em', backgroundColor: '#ED24D9' }}/>
                    </div>
                ) : null)
            }
          />
      </>
    );
  }
};
