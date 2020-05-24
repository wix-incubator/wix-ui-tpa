import * as React from 'react';
import { Text } from '../Text';
import styles from './Event.st.css';

export interface EventProps {
  time: string;
  title: string;
  isTimeShown: boolean;
  isMultiday: boolean;
}

interface DefaultProps {
  isTimeShown: boolean;
  isMultiday: boolean;
}

/** Event */
export class Event extends React.Component<EventProps> {
  static displayName = 'Event';
  static defaultProps: DefaultProps = {
    isTimeShown: true,
    isMultiday: false,
  };

  render() {
    const { time, title, isTimeShown, isMultiday, ...rest } = this.props;
    const timeComponent = isTimeShown ? (
      <Text className={styles.time}>{time}</Text>
    ) : null;
    return (
      <div {...styles('root', { isMultiday }, rest)}>
        {timeComponent}
        <Text className={styles.title}>{title}</Text>
      </div>
    );
  }
}
