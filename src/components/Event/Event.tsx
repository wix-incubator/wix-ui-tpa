import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ButtonNext } from 'wix-ui-core/button-next';
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
  onClick?(): void;
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
    const { fullday, selected, showTime, onClick } = this.props;

    return {
      [EVENT_DATA_KEYS.IsFullDay]: fullday,
      [EVENT_DATA_KEYS.IsSelected]: selected,
      [EVENT_DATA_KEYS.IsTimeShown]: showTime,
      [EVENT_DATA_KEYS.OnClick]: Boolean(onClick),
    };
  }

  render() {
    const {
      time,
      title,
      showTime,
      fullday,
      selected,
      className,
      onClick,
    } = this.props;
    const timeComponent =
      showTime && time ? <Text className={classes.time}>{time}</Text> : null;

    const eventProps = isContainer =>
      isContainer
        ? {
            'data-hook': this.props['data-hook'],
            ...this.getDataAttributes(),
          }
        : null;

    const event = (rtl, isContainer) => (
      <div
        {...eventProps(isContainer)}
        className={st(classes.root, { fullday, selected, rtl }, className)}
      >
        {timeComponent}
        <Text className={classes.title}>{title}</Text>
        <div className={classes.overlay} />
      </div>
    );

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return onClick ? (
            <ButtonNext
              onClick={onClick}
              className={st(classes.buttonContainer)}
              {...eventProps(true)}
            >
              {event(rtl, false)}
            </ButtonNext>
          ) : (
            event(rtl, true)
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}
