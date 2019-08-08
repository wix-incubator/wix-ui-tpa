import * as React from 'react';
import { Checkbox as CoreCheckbox } from 'wix-ui-core/checkbox';
import {
  CheckboxChecked,
  CheckboxIndeterminate,
} from 'wix-ui-icons-common/system';
import styles from './Checkbox.st.css';

export interface CheckboxProps {
  onChange(value: boolean): void;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: string;
  error?: boolean;
}

interface DefaultProps {
  checked: boolean;
  disabled: boolean;
  label: string;
  error: false;
  indeterminate: boolean;
}

/** An implementation of Checkbox for TPAs */
export class Checkbox extends React.Component<CheckboxProps> {
  static displayName = 'Checkbox';
  static defaultProps: DefaultProps = {
    checked: false,
    disabled: false,
    label: 'Test test',
    error: false,
    indeterminate: false,
  };

  _renderIcon = () => {
    const { checked, indeterminate, error } = this.props;

    if (checked && !error) {
      return (
        <span className={styles.icon}>
          <CheckboxChecked />
        </span>
      );
    }

    if (indeterminate && !error) {
      return (
        <span className={styles.icon}>
          <CheckboxIndeterminate />
        </span>
      );
    }

    return <span className={styles.icon} />;
  };

  render() {
    const {
      checked,
      disabled,
      label,
      error,
      indeterminate,
      onChange,
      ...rest
    } = this.props;
    const iconContent = this._renderIcon();

    return (
      <CoreCheckbox
        {...styles('root', { checked, disabled, error }, rest)}
        checkedIcon={iconContent}
        uncheckedIcon={iconContent}
        indeterminateIcon={iconContent}
        indeterminate={indeterminate}
        checked={checked}
        onChange={() => onChange(!checked)}
      >
        {label && <div className={styles.label}>{label}</div>}
      </CoreCheckbox>
    );
  }
}
