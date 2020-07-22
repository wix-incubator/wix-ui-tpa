import * as React from 'react';
import { Text } from '../Text';
import { CALENDAR_DATA_KEYS } from './dataHooks';
import { TPAComponentProps } from '../../types';
import styles from './CalendarCell.st.css';

export enum Alignment {
  left = 'left',
  center = 'center',
  right = 'right',
}

export enum Times {
  pastDate = 'pastDate',
  today = 'today',
  futureDate = 'futureDate',
}

export interface CalendarCellProps extends TPAComponentProps {
  title: string;
  children?: any;
  stretchable?: boolean;
  current?: boolean;
  alignment?: Alignment;
  timeType?: Times;
}

interface DefaultProps {
  stretchable: boolean;
  current: boolean;
  alignment: Alignment;
  timeType: Times;
}

/** CalendarCell */
export class CalendarCell extends React.Component<CalendarCellProps> {
  static displayName = 'CalendarCell';
  static defaultProps: DefaultProps = {
    stretchable: false,
    current: true,
    alignment: Alignment.left,
    timeType: Times.futureDate
  };

  getDataAttributes() {
    const {
      stretchable,
      current,
      timeType,
      alignment,
    } = this.props;

    return {
      [CALENDAR_DATA_KEYS.Stertchable]: stretchable,
      [CALENDAR_DATA_KEYS.TimeType]: timeType,
      [CALENDAR_DATA_KEYS.Current]: current,
      [CALENDAR_DATA_KEYS.Alignment]: alignment,
    };
  }

  render() {
    const {
      title,
      children,
      stretchable,
      current,
      alignment,
      timeType,
      ...rest
    } = this.props;

    return (
      <div
        {...this.getDataAttributes()}
        data-hook={this.props['data-hook']}
        {...styles(
          'root',
          { stretchable, current, alignment, timeType },
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
