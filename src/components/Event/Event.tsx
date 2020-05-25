import * as React from 'react';
import { Text } from '../Text';
import { EVENT_DATA_HOOKS, EVENT_DATA_KEYS } from './dataHooks';
import styles from './Event.st.css';

export interface EventProps {
  time?: string;
  title: string;
  isTimeShown?: boolean;
  isMultiday?: boolean;
  isRightToLeft?: boolean;
  isSelected?: boolean;
}

interface DefaultProps {
  isTimeShown: boolean;
  isMultiday: boolean;
  isRightToLeft: boolean;
  isSelected: boolean;
  'data-hook': string;
}

/** Event */
export class Event extends React.Component<EventProps> {
  static displayName = 'Event';
  static defaultProps: DefaultProps = {
    isTimeShown: true,
    isMultiday: false,
    isRightToLeft: false,
    isSelected: false,
    'data-hook': EVENT_DATA_HOOKS.Event,
  };

  getDataAttributes() {
    const { isMultiday, isRightToLeft, isSelected, isTimeShown } = this.props;

    return {
      [EVENT_DATA_KEYS.IsMultiday]: isMultiday,
      [EVENT_DATA_KEYS.IsRightToLeft]: isRightToLeft,
      [EVENT_DATA_KEYS.IsSelected]: isSelected,
      [EVENT_DATA_KEYS.IsTimeShown]: isTimeShown,
    };
  }

  render() {
    const {
      time,
      title,
      isTimeShown,
      isMultiday,
      isRightToLeft,
      isSelected,
      ...rest
    } = this.props;
    const timeComponent =
      isTimeShown && time ? <Text className={styles.time}>{time}</Text> : null;

    return (
      <div
        {...this.getDataAttributes()}
        data-hook={this.props['data-hook']}
        {...styles('root', { isMultiday, isSelected, isRightToLeft }, rest)}
      >
        {timeComponent}
        <Text className={styles.title}>{title}</Text>
      </div>
    );
  }
}
