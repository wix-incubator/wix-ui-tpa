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
        <div style={{ marginTop: '40px' }}>
          <h2>With Indications:</h2>
          <DatePicker
            className={classes.root}
            value={value}
            onChange={this._onChange}
            dateIndication={({ date }) =>
              date <= new Date() ? (
                <div
                  className="Indications"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div
                    className="indication"
                    style={{
                      borderRadius: '50%',
                      width: '0.3em',
                      height: '0.3em',
                      backgroundColor: '#ED24D9',
                    }}
                  />
                </div>
              ) : null
            }
          />
        </div>
      </>
    );
  }
};
