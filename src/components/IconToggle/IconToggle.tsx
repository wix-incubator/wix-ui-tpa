import * as React from 'react';
import { Checkbox as CoreCheckbox } from 'wix-ui-core/checkbox';
import styles from './IconToggle.st.css';
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
  label: React.ReactNode | string;
  labelPlacement: LabelPlacement;
  onChange?(event: OnChangeEvent): void;
  checked: boolean;
  disabled: boolean;
  animation: boolean;
}

interface DefaultProps {
  label: React.ReactNode | string;
  labelPlacement: LabelPlacement;
  checked: boolean;
  disabled: boolean;
  animation: boolean;
}

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
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        {label ? <div className={styles.spacer} /> : null}
        {label ? <div className={styles.label}>{label}</div> : null}
      </div>
    );
  };

  render() {
    const { labelPlacement, onChange, checked, disabled, animation, ...rest } = this.props;

    const content = this._getContent();
    
    return (
      <span {...styles('root', { checked, disabled, labelPlacement, animation }, rest)}>
        <CoreCheckbox
          uncheckedIcon={content}
          checkedIcon={content}
          indeterminateIcon={content}
          error={false}
          indeterminate={false}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
      </span>
    );
  }
}
