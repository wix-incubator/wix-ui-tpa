import * as React from 'react';
import { Input } from 'wix-ui-core/input';
import { Button } from 'wix-ui-core/button';
import { st, classes } from './Counter.st.css';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { ReactComponent as ErrorIconS } from '../../assets/icons/ErrorS.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as PlusS } from '../../assets/icons/PlusS.svg';
import { ReactComponent as MinusS } from '../../assets/icons/MinusS.svg';
import { TPAComponentProps } from '../../types';
import { Tooltip } from '../Tooltip';
import { TooltipSkin } from '../Tooltip/TooltipEnums';

export enum Size {
  medium = 'medium',
  xSmall = 'xSmall',
}

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
  errorMessage?: string;
  size?: Size;
}

interface DefaultProps {
  step: number;
  value: number;
  size: Size;
}

/** Counter */
export class Counter extends React.Component<CounterProps> {
  static displayName = 'Counter';
  static defaultProps: DefaultProps = {
    step: 1,
    value: 0,
    size: Size.medium,
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

  _getPlus = () => {
    const { size } = this.props;
    return size === Size.xSmall ? <PlusS /> : <Plus />;
  }

  _getMinus = () => {
    const { size } = this.props;
    return size === Size.xSmall ? <MinusS /> : <Minus />;
  }

  _getError = () => {
    const { size } = this.props;
    return size === Size.xSmall ? <ErrorIconS className={classes.error} /> : <ErrorIcon className={classes.error} />;
  }

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
      errorMessage,
      className,
      size,
    } = this.props;

    const shouldShowErrorMessageTooltip = error && errorMessage;
    const sizeClass = (size === Size.xSmall) ? classes.xsmall : '';
    return (
      <div
        className={st(classes.root, { disabled, error }, sizeClass, className)}
        dir="ltr"
        role="region"
        aria-labelledby={this.props['aria-labelledby']}
        aria-label={this.props['aria-label']}
        data-hook={this.props['data-hook']}
      >
        <Button
          aria-label={incrementAriaLabel}
          className={classes.btn}
          onClick={this._onIncrement}
          name="increment"
          disabled={disabled || (max && value + step > max)}
        >
          {this._getPlus()}
        </Button>
        {shouldShowErrorMessageTooltip && (
          <Tooltip
            data-hook="dropdown-error-tooltip"
            content={errorMessage}
            placement="top"
            appendTo="window"
            skin={TooltipSkin.Error}
          >
            {this._getError()}
          </Tooltip>
        )}
        <div className={classes.inputWrapper}>
          <Input
            aria-label={inputAriaLabel}
            onChange={ev => onChange(ev.target.value)}
            type="number"
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            error={error}
            value={value.toString()}
          />
        </div>
        <Button
          aria-label={decrementAriaLabel}
          className={classes.btn}
          onClick={this._onDecrement}
          name="decrement"
          disabled={disabled || value - step < min}
        >
          {this._getMinus()}
        </Button>
      </div>
    );
  }
}
