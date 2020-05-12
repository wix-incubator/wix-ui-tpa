import * as React from 'react';
import { Text } from '../Text';
import { CALENDARCELL_DATA_HOOKS, CALENDAR_DATA_KEYS } from './dataHooks';
import styles from './CalendarCell.st.css';

export enum Times {
  previousMonth = 'PreviousMonth',
  previousDays = 'PreviousDays',
  currentDay = 'CurrentDay',
  nextMonth = 'NextMonth',
}

export interface CalendarCellProps {
  time: string;
  children?: any;
  timeType?: Times;
  isStretchAble?: boolean;
}

interface DefaultProps {
  isStretchAble: boolean;
  'data-hook': string;
}

interface State {}

/** CalendarCell */
export class CalendarCell extends React.Component<CalendarCellProps, State> {
  static displayName = 'CalendarCell';
  static defaultProps: DefaultProps = {
    isStretchAble: false,
    'data-hook': CALENDARCELL_DATA_HOOKS.CalendarCell,
  };

  getDataAttributes() {
    const { isStretchAble, timeType } = this.props;

    return {
      [CALENDAR_DATA_KEYS.IsStretchAble]: isStretchAble,
      [CALENDAR_DATA_KEYS.TimeType]: timeType,
    };
  }

  render() {
    const { time, children, timeType, isStretchAble, ...rest } = this.props;

    return (
      <div
        {...this.getDataAttributes()}
        data-hook={this.props['data-hook']}
        {...styles('root', { timeType, isStretchAble }, rest)}
      >
        <div className={styles.innerContainer}>
          <Text className={styles.time}>{time}</Text>
          <div>{children}</div>
        </div>
      </div>
    );
  }
}
