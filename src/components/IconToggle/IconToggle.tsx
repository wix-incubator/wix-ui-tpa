import * as React from 'react';
import { Checkbox as CoreCheckbox } from 'wix-ui-core/checkbox';
import styles from './IconToggle.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export interface OnChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  checked: boolean;
}

export enum LabelPlacement {
  START = 'start',
  END = 'end',
}

export interface IconToggleProps {
  icon: React.ReactNode;
  label: React.ReactNode | string;
  labelPlacement: LabelPlacement;
  onChange?(event: OnChangeEvent): void;
  checked: boolean;
  disabled: boolean;
}

interface DefaultProps {
  label: React.ReactNode | string;
  labelPlacement: LabelPlacement;
  checked: boolean;
  disabled: boolean;
}

/** IconToggle */
export class IconToggle extends React.Component<IconToggleProps> {
  static displayName = 'IconToggle';
  static defaultProps: DefaultProps = {
    label: undefined,
    labelPlacement: LabelPlacement.END,
    checked: false,
    disabled: false,
  };

  render() {
    const {
      icon,
      label,
      labelPlacement,
      onChange,
      checked,
      disabled,
      ...rest
    } = this.props;

    const renderIcon = () => (
      <div className={styles.container}>
        <div className={styles.icon}>{icon}</div>
        {label ? <div className={styles.spacer} /> : null}
        {label ? <div className={styles.label}>{label}</div> : null}
      </div>
    );

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            {...styles(
              'root',
              { mobile, checked, disabled, labelPlacement },
              rest,
            )}
          >
            <CoreCheckbox
              className={styles.toggle}
              uncheckedIcon={renderIcon()}
              checkedIcon={renderIcon()}
              indeterminateIcon={renderIcon()}
              error={false}
              indeterminate={false}
              checked={checked}
              disabled={disabled}
              onChange={onChange}
            />
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
