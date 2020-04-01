import * as React from 'react';

import { Button } from '../Button';
import { TPAComponentProps } from '../../types';

import { DATA_HOOKS } from './constants';
import { FloatingDropdownOptionProps } from './FloatingDropdownOption';

import styles from './FloatingDropdownBase.st.css';

interface FloatingDropdownBaseProps {
  selectedOption: FloatingDropdownOptionProps;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export const FloatingDropdownBase = (props: FloatingDropdownBaseProps & TPAComponentProps) => {
  const {
    selectedOption,
    placeholder,
    disabled,
    ['aria-label']: ariaLabel,
    ['aria-labelledby']: ariaLabelledBy,
  } = props;
  return (
    <Button
      fullWidth
      {...styles('root', { }, props)}
      data-hook={DATA_HOOKS.base}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-haspopup
    >
      {placeholder} {selectedOption && selectedOption.value}
    </Button>
  );
};
