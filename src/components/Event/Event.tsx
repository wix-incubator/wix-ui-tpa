import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Text } from '../Text';
import { EVENT_DATA_KEYS } from './dataHooks';
import { TPAComponentProps } from '../../types';
import styles from './Event.st.css';

export interface EventProps extends TPAComponentProps {
  time?: string;
  title: string;
  showTime?: boolean;
  fullday?: boolean;
  selected?: boolean;
}

interface DefaultProps {
  showTime: boolean;
  fullday: boolean;
  selected: boolean;
}

/** Event */
export class Event extends React.Component<EventProps> {
  static displayName = 'Event';
  static defaultProps: DefaultProps = {
    showTime: true,
    fullday: false,
    selected: false,
  };

  getDataAttributes() {
    const { fullday, selected, showTime } = this.props;

    return {
      [EVENT_DATA_KEYS.IsMultiday]: fullday,
      [EVENT_DATA_KEYS.IsSelected]: selected,
      [EVENT_DATA_KEYS.IsTimeShown]: showTime,
    };
  }

  render() {
    const { time, title, showTime, fullday, selected, ...rest } = this.props;
    const timeComponent =
      showTime && time ? <Text className={styles.time}>{time}</Text> : null;

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return (
            <div
              data-hook={this.props['data-hook']}
              {...this.getDataAttributes()}
              {...styles('root', { fullday, selected, rtl }, rest)}
            >
              {timeComponent}
              <Text className={styles.title}>{title}</Text>
              <div className={styles.overlay} />
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}
