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
  stretchable?: boolean;
  boldTitle?: boolean;
  boldBackground?: boolean;
  current?: boolean;
}

interface DefaultProps {
  stretchable: boolean;
  'data-hook': string;
  boldTitle: boolean;
  boldBackground: boolean;
  current: boolean;
}

/** CalendarCell */
export class CalendarCell extends React.Component<CalendarCellProps> {
  static displayName = 'CalendarCell';
  static defaultProps: DefaultProps = {
    stretchable: false,
    'data-hook': CALENDARCELL_DATA_HOOKS.CalendarCell,
    boldTitle: true,
    boldBackground: true,
    current: false,
  };

  getDataAttributes() {
    const { stretchable, boldBackground, boldTitle, current } = this.props;

    return {
      [CALENDAR_DATA_KEYS.Stertchable]: stretchable,
      [CALENDAR_DATA_KEYS.BoldTitle]: boldTitle,
      [CALENDAR_DATA_KEYS.BoldBackground]: boldBackground,
      [CALENDAR_DATA_KEYS.Current]: current,
    };
  }

  render() {
    const {
      title,
      children,
      stretchable,
      boldTitle,
      boldBackground,
      current,
      ...rest
    } = this.props;

    return (
      <div
        {...this.getDataAttributes()}
        data-hook={this.props['data-hook']}
        {...styles(
          'root',
          { stretchable, boldTitle, boldBackground, current },
          rest,
        )}
      >
        <div className={styles.innerContainer}>
          <Text className={styles.title}>{title}</Text>
          {children}
        </div>
      </div>
    );
  }
}
