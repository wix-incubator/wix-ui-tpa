import * as React from 'react';
import classNames from 'classnames';
import { TPAComponentProps } from '../../types';

import { st, classes } from './SimpleDatePicker.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export interface SimpleDatePickerProps extends TPAComponentProps {
  disabled?: boolean;
  theme?: 'Box' | 'Line';
}

interface DefaultProps {
  disabled: boolean;
}

/** SimpleDatePicker */
export class SimpleDatePicker extends React.Component<SimpleDatePickerProps> {
  static displayName = 'SimpleDatePicker';
  static defaultProps: DefaultProps = {
    disabled: true,
  };

  _renderDays(weekIndex) {
    const days = [1,2,3,4,5,6,7];

    return days.map(
        dayIndex => {
          let day = dayIndex + 7 * (weekIndex - 1);
          return (
              <div
                  key={day}
                  className={classes.day}
              >
              {day}
            </div>
          );
        }
    );
  };

  _renderWeeks() {
    const weeks = [1, 2, 3, 4];

    return weeks.map(
        weekIndex => (
            <div
                key={weekIndex}
                className={classes.daysRow}
            >
              {this._renderDays(weekIndex)}
            </div>
        )
    );
  };

  render() {
    const { className, disabled } = this.props;

    return (
      // Add this context consumer if the component needs to be aware of `mobile` and `rtl` states of the app
      // For more information: https://github.com/wix/wix-ui-tpa/blob/master/docs/USAGE.md#tpacomponentsprovider
      // <TPAComponentsConsumer>
      //   {({ mobile, rtl }) => (
      <div
        className={st(
          classes.root,
          { disabled },
          className,
        )}
        data-hook={this.props['data-hook']}
      >
        <div className={classes.header}>Header</div>
        <div className={classes.daysContainer}>
          {this._renderWeeks()}
        </div>
      </div>
      //   )}
      // </TPAComponentsConsumer>
    );
  }
}