import * as React from 'react';
import { TPAComponentProps } from '../../types';
import { st, classes } from './CounterBadge.st.css';

export const COUNTER_BADGE_DEFAULT = {
  minimum: 0,
  maximum: 99,
};
export enum COUNTER_BADGE_PRIORITY {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
}

export interface CounterBadgeProps extends TPAComponentProps {
  /** define style preset */
  priority?: COUNTER_BADGE_PRIORITY;
  /** define value that counterBadge will present */
  value: number;
  /** define maximum value that above that number the counterBadge will present `+${maximum}` */
  maximum?: number;
}

interface DefaultProps {
  priority: COUNTER_BADGE_PRIORITY;
  value: number;
  maximum: number;
}

class CounterBadge extends React.Component<CounterBadgeProps> {
  static displayName = 'CounterBadge';
  static defaultProps: DefaultProps = {
    priority: COUNTER_BADGE_PRIORITY.default,
    value: 0,
    maximum: 99,
  };

  render() {
    const { className, value } = this.props;

    const priority =
      this.props.priority === COUNTER_BADGE_PRIORITY.secondary
        ? COUNTER_BADGE_PRIORITY.secondary
        : COUNTER_BADGE_PRIORITY.primary;
    const inputNumber: number = Math.floor(value);
    const maximum =
      this.props.maximum || this.props.maximum > 99 || this.props.maximum < 1
        ? this.props.maximum
        : 99;

    const numberToPresent =
      inputNumber > maximum ? `+${maximum}` : `${inputNumber}`;

    return (
      <div
        className={st(classes.root, classes[`priority-${priority}`], className)}
        data-priority={priority}
        data-hook={this.props['data-hook']}
      >
        <div
          className={st(
            classes.innerContainer,
            classes[`${numberToPresent[0] === '+' ? 'maximumNumber' : ''}`],
          )}
        >
          {numberToPresent}
        </div>
      </div>
    );
  }
}

export { CounterBadge };
