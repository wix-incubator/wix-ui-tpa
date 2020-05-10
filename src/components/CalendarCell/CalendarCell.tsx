import * as React from 'react';
import { Text } from '../Text';
import styles from './CalendarCell.st.css';

export enum Times {
  previousMonth = 'PreviousMonth',
  previousDays = 'PreviousDays',
  currentDay = 'CurrentDay',
  nextMonth = 'NextMonth'
}

export interface CalendarCellProps {
  time: string;
  children: any;
  timeType: Times;
}

interface DefaultProps {}

interface State {}

/** CalendarCell */
export class CalendarCell extends React.Component<CalendarCellProps, State> {
  static displayName = 'CalendarCell';
  static defaultProps: DefaultProps = {};

  render() {
    const { time, children, timeType, ...rest } = this.props;

    return (
      <div {...styles('root', {timeType}, rest)}>
        <Text className={styles.time}>{time}</Text>
        <div>{children}</div>
      </div>
    );
  }
}
