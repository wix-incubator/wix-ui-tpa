import * as React from 'react';
import { TPAComponentProps } from '../../types';
import { DATA_HOOKS } from './constant';
import { st, classes } from './CounterBadge.st.css';

const RANGE = {
  minimum: 1,
  maximum: 99,
};

export enum COUNTER_BADGE_PRIORITY {
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
  maximum: number;
}

class CounterBadge extends React.Component<CounterBadgeProps> {
  static displayName = 'CounterBadge';
  static defaultProps: DefaultProps = {
    priority: COUNTER_BADGE_PRIORITY.primary,
    maximum: 99,
  };

  render() {
    const { priority, maximum, className, value } = this.props;

    const isMaximumNumber = value > maximum;
    const numberToPresent = isMaximumNumber ? `+${maximum}` : `${value}`;

    return (
      <div
        className={st(classes.root, classes[`priority-${priority}`], className)}
        data-priority={priority}
        data-hook={this.props['data-hook']}
      >
        <div
          className={st(classes.innerContainer, {
            maximumNumber: isMaximumNumber,
          })}
          data-hook={DATA_HOOKS.VALUE}
        >
          {numberToPresent}
        </div>
      </div>
    );
  }
}

export { CounterBadge };
