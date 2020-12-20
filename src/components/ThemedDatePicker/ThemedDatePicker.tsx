import * as React from 'react';
import { TPAComponentProps } from '../../types';

import { st, classes } from './ThemedDatePicker.st.css';

import { SimpleDatePicker } from '../SimpleDatePicker';

export interface ThemedDatePickerProps extends TPAComponentProps {}

interface DefaultProps {}

/** ThemedDatePicker */
export class ThemedDatePicker extends React.Component<ThemedDatePickerProps> {
  static displayName = 'ThemedDatePicker';
  static defaultProps: DefaultProps = {};

  render() {
    const { className } = this.props;

    return (
      <div
        className={st(classes.root, {}, className)}
        data-hook={this.props['data-hook']}
      >
          <div className={classes.title}>My Day Picker</div>
          <SimpleDatePicker className={classes.myDatePicker}/>
      </div>
    );
  }
}
