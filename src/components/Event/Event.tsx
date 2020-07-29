import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Text } from '../Text';
import { EVENT_DATA_KEYS } from './dataHooks';
import { TPAComponentProps } from '../../types';
import { st, classes } from './Event.st.css';

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
      [EVENT_DATA_KEYS.IsFullDay]: fullday,
      [EVENT_DATA_KEYS.IsSelected]: selected,
      [EVENT_DATA_KEYS.IsTimeShown]: showTime,
    };
  }

  render() {
    const { time, title, showTime, fullday, selected, className } = this.props;
    const timeComponent =
      showTime && time ? <Text className={classes.time}>{time}</Text> : null;

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return (
            <div
              data-hook={this.props['data-hook']}
              {...this.getDataAttributes()}
              className={st(
                classes.root,
                { fullday, selected, rtl },
                className,
              )}
            >
              {timeComponent}
              <Text className={classes.title}>{title}</Text>
              <div className={classes.overlay} />
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}
