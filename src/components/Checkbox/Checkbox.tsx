import * as React from 'react';
import { Checkbox as CoreCheckbox } from 'wix-ui-core/checkbox';
import {
  CheckboxChecked,
  CheckboxIndeterminate,
} from 'wix-ui-icons-common/system';
import { CHECKBOX_DATA_HOOKS, CHEKCBOX_DATA_KEYS } from './dataHooks';
import { TPAComponentProps } from '../../types';
import styles from './Checkbox.st.css';

interface OnChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  checked: boolean;
}
export interface CheckboxProps extends TPAComponentProps {
  onChange(event: OnChangeEvent): void;
  label: React.ReactNode | string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  error?: boolean;
  name?: string;
}

interface DefaultProps {
  checked: boolean;
  disabled: boolean;
  label: string;
  error: false;
  indeterminate: boolean;
  'data-hook': string;
}

/** An implementation of Checkbox for TPAs */
export class Checkbox extends React.Component<CheckboxProps> {
  static displayName = 'Checkbox';
  static defaultProps: DefaultProps = {
    checked: false,
    disabled: false,
    label: '',
    error: false,
    indeterminate: false,
    'data-hook': CHECKBOX_DATA_HOOKS.CheckboxWrapper,
  };

  getDataAttributes() {
    const { disabled, error, indeterminate, checked } = this.props;

    return {
      [CHEKCBOX_DATA_KEYS.Disabled]: disabled,
      [CHEKCBOX_DATA_KEYS.Error]: error,
      [CHEKCBOX_DATA_KEYS.Indeterminate]: indeterminate,
      [CHEKCBOX_DATA_KEYS.Checked]: checked,
    };
  }

  _renderIcon = () => {
    const { checked, indeterminate, error } = this.props;

    return (
      <span className={styles.icon} data-hook={CHECKBOX_DATA_HOOKS.IconWrapper}>
        {checked && !error ? (
          <CheckboxChecked />
        ) : indeterminate && !error ? (
          <CheckboxIndeterminate />
        ) : (
          ''
        )}
      </span>
    );
  };

  render() {
    const {
      checked,
      disabled,
      label,
      error,
      indeterminate,
      onChange,
      name,
      ...rest
    } = this.props;
    const iconContent = this._renderIcon();

    return (
      <CoreCheckbox
        {...styles('root', { checked, disabled, error }, rest)}
        {...this.getDataAttributes()}
        data-hook={this.props['data-hook']}
        checkedIcon={iconContent}
        uncheckedIcon={iconContent}
        indeterminateIcon={iconContent}
        indeterminate={indeterminate}
        checked={checked}
        onChange={onChange}
        name={name}
      >
        <>
          {!!label && <span className={styles.divider} />}
          <div
            data-hook={CHECKBOX_DATA_HOOKS.LabelWrapper}
            className={styles.label}
          >
            {label}
          </div>
        </>
      </CoreCheckbox>
    );
  }
}
