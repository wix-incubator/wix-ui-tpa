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

export interface CalendarCellProps extends TPAComponentProps {
  title: string;
  children?: any;
  stretchable?: boolean;
  boldTitle?: boolean;
  boldBackground?: boolean;
  alignment?: Alignment;
  current?: boolean;
}

interface DefaultProps {
  stretchable: boolean;
  boldTitle: boolean;
  boldBackground: boolean;
  current: boolean;
  alignment: Alignment;
}

/** CalendarCell */
export class CalendarCell extends React.Component<CalendarCellProps> {
  static displayName = 'CalendarCell';
  static defaultProps: DefaultProps = {
    stretchable: false,
    boldTitle: true,
    boldBackground: true,
    current: false,
    alignment: Alignment.left,
  };

  getDataAttributes() {
    const {
      stretchable,
      boldBackground,
      boldTitle,
      current,
      alignment,
    } = this.props;

    return {
      [CALENDAR_DATA_KEYS.Stertchable]: stretchable,
      [CALENDAR_DATA_KEYS.BoldTitle]: boldTitle,
      [CALENDAR_DATA_KEYS.BoldBackground]: boldBackground,
      [CALENDAR_DATA_KEYS.Current]: current,
      [CALENDAR_DATA_KEYS.Alignment]: alignment,
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
      alignment,
      ...rest
    } = this.props;

    return (
      <div
        {...this.getDataAttributes()}
        data-hook={this.props['data-hook']}
        {...styles(
          'root',
          { stretchable, boldTitle, boldBackground, current, alignment },
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
