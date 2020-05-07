import * as React from 'react';
import { Text } from '../Text';
import styles from './CalendarCell.st.css';

export enum Alignment {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface CalendarCellProps {
  time: string;
  children: any;
}

interface DefaultProps {
}

interface State {
}

/** CalendarCell */
export class CalendarCell extends React.Component<CalendarCellProps, State> {
  static displayName = 'CalendarCell';
  static defaultProps: DefaultProps = { };


  render() {
    const { time, children,  ...rest } = this.props;

    return (
      <div {...styles('root', {}, rest)}>
          <Text className={styles.time}>{time}</Text>
        <div>
          {children}
        </div>
      </div>
    );
  }
}
