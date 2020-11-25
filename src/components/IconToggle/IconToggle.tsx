import * as React from 'react';
import { Checkbox as CoreCheckbox } from 'wix-ui-core/checkbox';
import { st, classes } from './IconToggle.st.css';
import { TPAComponentProps } from '../../types';

export interface OnChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  checked: boolean;
}

export enum LabelPlacement {
  START = 'start',
  END = 'end',
}

export interface IconToggleProps extends TPAComponentProps {
  icon: React.ReactNode;
  label?: React.ReactNode | string;
  labelPlacement?: LabelPlacement;
  onChange?(event: OnChangeEvent): void;
  checked?: boolean;
  disabled?: boolean;
  animation?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

interface DefaultProps {
  label: React.ReactNode | string;
  labelPlacement: LabelPlacement;
  checked: boolean;
  disabled: boolean;
  animation: boolean;
}

/**
 * A toggle button represented by an icon and label
 */
export class IconToggle extends React.Component<IconToggleProps> {
  static displayName = 'IconToggle';
  static defaultProps: DefaultProps = {
    label: '',
    labelPlacement: LabelPlacement.END,
    checked: false,
    disabled: false,
    animation: false,
  };

  _getContent = () => {
    const { icon, label } = this.props;

    return (
      <div className={classes.content}>
        <div className={classes.icon}>{icon}</div>
        {label ? <div className={classes.spacer} /> : null}
        {label ? <div className={classes.label}>{label}</div> : null}
      </div>
    );
  };

  render() {
    const {
      label,
      labelPlacement,
      onChange,
      checked,
      disabled,
      animation,
      className,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
    } = this.props;

    const content = this._getContent();

    return (
      <span
        className={st(
          classes.root,
          { checked, disabled, labelPlacement, animation },
          className,
        )}
        data-hook={this.props['data-hook']}
      >
        <CoreCheckbox
          uncheckedIcon={content}
          checkedIcon={content}
          indeterminateIcon={content}
          error={false}
          indeterminate={false}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          aria-label={
            ariaLabel || (typeof label === 'string' ? label : undefined)
          }
          aria-labelledby={ariaLabelledBy}
        />
      </span>
    );
  }
}
