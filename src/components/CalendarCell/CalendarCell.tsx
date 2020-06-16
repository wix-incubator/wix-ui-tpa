import * as React from 'react';
import { Text } from '../Text';
import { CALENDAR_DATA_KEYS } from './dataHooks';
import { TPAComponentProps } from '../../types';
import styles from './CalendarCell.st.css';

export enum Times {
  previousMonth = 'previousMonth',
  previousDays = 'previousDays',
  currentDay = 'currentDay',
  nextMonth = 'nextMonth',
}

export interface CalendarCellProps extends TPAComponentProps {
  title: string;
  children?: any;
  stretchable?: boolean;
  boldTitle?: boolean;
  boldBackground?: boolean;
  current?: boolean;
}

interface DefaultProps {
  stretchable: boolean;
  boldTitle: boolean;
  boldBackground: boolean;
  current: boolean;
}

/** CalendarCell */
export class CalendarCell extends React.Component<CalendarCellProps> {
  static displayName = 'CalendarCell';
  static defaultProps: DefaultProps = {
    stretchable: false,
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
