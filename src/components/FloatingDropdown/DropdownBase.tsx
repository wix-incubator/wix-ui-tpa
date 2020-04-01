import * as React from 'react';

import { Button } from '../Button';
import { TPAComponentProps } from '../../types';

import { DATA_HOOKS } from './constants';
import { FloatingDropdownOptionProps } from './FloatingDropdownOption';

import styles from './DropdownBase.st.css';

interface DropdownBaseProps {
  selectedOption: FloatingDropdownOptionProps;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export const DropdownBase = (props: DropdownBaseProps & TPAComponentProps) => {
  const {
    selectedOption,
    placeholder,
    error,
    disabled,
    ['aria-label']: ariaLabel,
    ['aria-labelledby']: ariaLabelledBy,
  } = props;
  const hasPlaceholder = !selectedOption || !selectedOption.value;
  return (
    <Button
      fullWidth
      {...styles('root', { error, placeholder: hasPlaceholder }, props)}
      data-hook={DATA_HOOKS.base}
      data-dropdown-base-error={error}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-haspopup
      prefixIcon={
        selectedOption && selectedOption.icon ? (
          <div className={styles.optionIcon}>{selectedOption.icon}</div>
        ) : null
      }
    >
      {placeholder} {selectedOption && selectedOption.value}
    </Button>
  );
};
