import * as React from 'react';
import { Input } from 'wix-ui-core/input';
import { Button } from 'wix-ui-core/button';
import style from './Counter.st.css';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { TPAComponentProps } from '../../types';

export interface CounterProps extends TPAComponentProps {
  onChange(val: string): void;
  incrementAriaLabel: string;
  decrementAriaLabel: string;
  inputAriaLabel: string;
  ['aria-abelledby']?: string;
  ['aria-label']?: string;
  value: number;
  step: number;
  min?: number;
  max?: number;
  error?: boolean;
  disabled?: boolean;
}

interface DefaultProps {
  step: number;
  value: number;
}

/** Counter */
export class Counter extends React.Component<CounterProps> {
  static displayName = 'Counter';
  static defaultProps: DefaultProps = {
    step: 1,
    value: 0,
  };

  _onDecrement = () => {
    const { step, max, onChange, value } = this.props;
    if (max || max === 0) {
      const result = Math.min(max, value - step);
      onChange(result.toString());
      return;
    }
    onChange((value - step).toString());
  };

  _onIncrement = () => {
    const { step, min, onChange, value } = this.props;
    if (min || min === 0) {
      const result = Math.max(min, value + step);
      onChange(result.toString());
      return;
    }

    onChange((value + step).toString());
  };

  render() {
    const {
      incrementAriaLabel,
      decrementAriaLabel,
      inputAriaLabel,
      min,
      max,
      step,
      disabled,
      onChange,
      value,
      error,
      ...rest
    } = this.props;

    return (
      <div
        {...style('root', { disabled, error }, rest)}
        dir="ltr"
        role="region"
        aria-labelledby={this.props['aria-labelledby']}
        aria-label={this.props['aria-label']}
      >
        <Button
          aria-label={incrementAriaLabel}
          className={style.btn}
          onClick={this._onIncrement}
          name="increment"
          disabled={disabled || (max && value + step > max)}
        >
          <Plus />
        </Button>
        <Input
          aria-label={inputAriaLabel}
          onChange={ev => onChange(ev.target.value)}
          type="number"
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          value={value.toString()}
        />
        <Button
          aria-label={decrementAriaLabel}
          className={style.btn}
          onClick={this._onDecrement}
          name="decrement"
          disabled={disabled || value - step < min}
        >
          <Minus />
        </Button>
      </div>
    );
  }
}
