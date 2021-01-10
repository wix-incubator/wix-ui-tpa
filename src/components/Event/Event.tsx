import * as React from 'react';
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
  disabled?: boolean;
  onClick?(): void;
  'aria-has-popup'?: boolean;
  'aria-expanded'?: boolean;
}

interface DefaultProps {
  showTime: boolean;
  fullday: boolean;
  selected: boolean;
  disabled: boolean;
  onClick(): void;
  'aria-has-popup'?: boolean;
  'aria-expanded': boolean;
}

/** Event */
export class Event extends React.Component<EventProps> {
  static displayName = 'Event';
  static defaultProps: DefaultProps = {
    showTime: true,
    fullday: false,
    selected: false,
    disabled: false,
    onClick: null,
    'aria-has-popup': false,
    'aria-expanded': false,
  };

  getDataAttributes() {
    const { fullday, selected, showTime } = this.props;

    return {
      [EVENT_DATA_KEYS.IsFullDay]: fullday,
      [EVENT_DATA_KEYS.IsSelected]: selected,
      [EVENT_DATA_KEYS.IsTimeShown]: showTime,
    };
  }

  _getEventProps = (isContainer) =>
    isContainer
      ? {
          'data-hook': this.props['data-hook'],
          ...this.getDataAttributes(),
          [EVENT_DATA_KEYS.ARIA_Has_Popup]: this.props['aria-has-popup'],
          [EVENT_DATA_KEYS.ARIA_Expanded]: this.props['aria-expanded'],
        }
      : null;

  _getEvent = (isContainer, className, timeComponent, title) => (
    <div
      {...this._getEventProps(isContainer)}
      className={st(
        classes.root,
        { fullday: this.props.fullday, selected: this.props.selected },
        className,
      )}
    >
      {timeComponent}
      <Text className={classes.title}>{title}</Text>
      <div className={classes.overlay} />
    </div>
  );

  render() {
    const { time, title, showTime, className, onClick, disabled } = this.props;
    const timeComponent =
      showTime && time ? <Text className={classes.time}>{time}</Text> : null;

    return onClick ? (
      <ButtonNext
        onClick={() => !disabled && onClick()}
        className={st(classes.buttonContainer)}
        {...this._getEventProps(true)}
      >
        {this._getEvent(false, className, timeComponent, title)}
      </ButtonNext>
    ) : (
      this._getEvent(true, className, timeComponent, title)
    );
  }
}
