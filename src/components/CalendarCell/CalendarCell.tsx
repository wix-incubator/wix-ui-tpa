import * as React from 'react';
import { Text } from '../Text';
import { CALENDARCELL_DATA_HOOKS, CALENDAR_DATA_KEYS } from './dataHooks';
import styles from './CalendarCell.st.css';

export enum Times {
  previousMonth = 'previousMonth',
  previousDays = 'previousDays',
  currentDay = 'currentDay',
  nextMonth = 'nextMonth',
}

export interface CalendarCellProps {
  title: string;
  children?: any;
  timeType?: Times;
  stretchable?: boolean;
}

interface DefaultProps {
  stretchable: boolean;
  'data-hook': string;
}

interface State {}

/** CalendarCell */
export class CalendarCell extends React.Component<CalendarCellProps, State> {
  static displayName = 'CalendarCell';
  static defaultProps: DefaultProps = {
    stretchable: false,
    'data-hook': CALENDARCELL_DATA_HOOKS.CalendarCell,
  };

  getDataAttributes() {
    const { stretchable, timeType } = this.props;

    return {
      [CALENDAR_DATA_KEYS.Stertchable]: stretchable,
      [CALENDAR_DATA_KEYS.TimeType]: timeType,
    };
  }

  render() {
    const { title, children, timeType, stretchable, ...rest } = this.props;

    return (
      <div
        {...this.getDataAttributes()}
        data-hook={this.props['data-hook']}
        {...styles('root', { timeType, stretchable }, rest)}
      >
        <div className={styles.innerContainer}>
          <Text className={styles.title}>{title}</Text>
          {children}
        </div>
      </div>
    );
  }
}
