import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Text } from '../Text';
import { EVENT_DATA_HOOKS, EVENT_DATA_KEYS } from './dataHooks';
import styles from './Event.st.css';

export interface EventProps {
  time?: string;
  title: string;
  showTime?: boolean;
  multiday?: boolean;
  selected?: boolean;
}

interface DefaultProps {
  showTime: boolean;
  multiday: boolean;
  selected: boolean;
  'data-hook': string;
}

/** Event */
export class Event extends React.Component<EventProps> {
  static displayName = 'Event';
  static defaultProps: DefaultProps = {
    showTime: true,
    multiday: false,
    selected: false,
    'data-hook': EVENT_DATA_HOOKS.Event,
  };

  getDataAttributes() {
    const { multiday, selected, showTime } = this.props;

    return {
      [EVENT_DATA_KEYS.IsMultiday]: multiday,
      [EVENT_DATA_KEYS.IsSelected]: selected,
      [EVENT_DATA_KEYS.IsTimeShown]: showTime,
    };
  }

  render() {
    const { time, title, showTime, multiday, selected, ...rest } = this.props;
    const timeComponent =
      showTime && time ? <Text className={styles.time}>{time}</Text> : null;

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return (
            <div
              {...this.getDataAttributes()}
              data-hook={this.props['data-hook']}
              {...styles('root', { multiday, selected, rtl }, rest)}
            >
              {timeComponent}
              <Text className={styles.title}>{title}</Text>
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}
