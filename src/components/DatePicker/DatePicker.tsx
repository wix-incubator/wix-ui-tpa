import * as React from 'react';
import { TPAComponentProps } from '../../types';

import WSRDatePicker from 'wix-style-react/dist/src/DatePicker';

import { st, classes } from './DatePicker.st.css';
import { DATA_HOOKS } from './constants';

export interface DatePickerProps extends TPAComponentProps {
}

interface DefaultProps {
}

interface State {
}

/** The Date pickers presents a calendar and allows a user to select a specific date. */
export class DatePicker extends React.Component<DatePickerProps, State> {
  static displayName = 'DatePicker';
  static defaultProps: DefaultProps = {};

  state = {};

  render() {
    const { className } = this.props;

    return (
      <div className={st(classes.root, className)} data-hook={this.props['data-hook']}>
        <WSRDatePicker
            placeholderText="Select Date"
            value={new Date('08/07/1992')}
            onChange={() => {}}
        />
      </div>
    );
  }
}
