import * as React from 'react';
import { Text } from '../Text';
import styles from './CalendarCell.st.css';

export enum Times {
  previousMonth = 'PreviousMonth',
  previousDays = 'PreviousDays',
  currentDay = 'CurrentDay',
  nextMonth = 'NextMonth',
}

export interface CalendarCellProps {
  time: string;
  children: any;
  timeType?: Times;
  isStretchAble?: boolean;
}

interface DefaultProps {
  isStretchAble: boolean;
}

interface State { }

/** CalendarCell */
export class CalendarCell extends React.Component<CalendarCellProps, State> {
  static displayName = 'CalendarCell';
  static defaultProps: DefaultProps = {
    isStretchAble: false,
  };

  render() {
    const { time, children, timeType, isStretchAble, ...rest } = this.props;

    return (
      <div {...styles('root', { timeType, isStretchAble }, rest)}>
        <div className={styles.innerContainer}>
          <Text className={styles.time}>{time}</Text>
          <div>{children}</div>
        </div>
      </div>
    );
  }
}
