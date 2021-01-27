import * as React from 'react';
import { TPAComponentProps } from '../../types';
import { st, classes } from './CounterBadge.st.css';

export const COUNTER_BADGE_DEFAULT = {
  minimum: 0,
  maximum: 99,
};
export enum COUNTER_BADGE_PRIORITY {
  default = 'primary',
  primary = 'primary',
  secondary = 'secondary',
}

export interface CounterBadgeProps extends TPAComponentProps {
  /** define style preset */
  priority?: COUNTER_BADGE_PRIORITY;
  /** define minimum value that below the counterBadge will be hidden */
  minimum?: number;
  /** define maximum value that above that number the counterBadge will present `+${maximum}` */
  maximum?: number;
}

interface DefaultProps {
  priority: COUNTER_BADGE_PRIORITY;
  minimum: number;
  maximum: number;
}

class CounterBadge extends React.Component<CounterBadgeProps> {
  static displayName = 'CounterBadge';
  static defaultProps: DefaultProps = {
    priority: COUNTER_BADGE_PRIORITY.default,
    minimum: 0,
    maximum: 99,
  };

  render() {
    const { priority, children, className } = this.props;
    const inputNumberString: string = children.toString();
    const inputNumberTrimed: string = inputNumberString.trim();
    const regex = /^\d{1,3}(,\d{3})*?$|^\d+$/g;
    const isInputNotValidPositiveNumber: boolean = !inputNumberTrimed.match(
      regex,
    );
    if (isInputNotValidPositiveNumber) {
      return null;
    }

    const inputNumberNoCommas: string = inputNumberTrimed.replace(',', '');
    const inputNumber: number = parseInt(inputNumberNoCommas, 10);
    const minimum = this.props.minimum ?? 0;
    const maximum = this.props.maximum ?? 99;

    if (inputNumber < minimum) {
      return null;
    }

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
