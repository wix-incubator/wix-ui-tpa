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
  /** There are 2 different themes: `primary` and `secondary`. The default value is ‘primary’. */
  priority?: COUNTER_BADGE_PRIORITY;
  /** define value that counterBadge will present */
  value: number;
  /** A number between 1  to 99 that defines the maximum value that above that number the counterBadge will present `+${maximum}` */
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
    const maximumValue =
     maximum > RANGE.maximum || maximum < RANGE.minimum
        ? maximum
        : RANGE.maximum;

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
