import * as React from 'react';

import { ReactComponent as ArrowIcon } from '../../assets/icons/CaretDown.svg';
import { Button } from '../Button';
import { TPAComponentProps } from '../../types';
import { DATA_HOOKS, ICON_SIZE } from './constants';
import { FloatingDropdownOptionProps } from './FloatingDropdownOption';

import styles from './FloatingDropdownBase.st.css';

interface FloatingDropdownBaseProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  disabled: boolean;
  label: string;
  placeholder: string;
  selectedOption: FloatingDropdownOptionProps;
}

export const FloatingDropdownBase = (
  props: FloatingDropdownBaseProps & TPAComponentProps,
) => {
  const {
    ['aria-label']: ariaLabel,
    ['aria-labelledby']: ariaLabelledBy,
    disabled,
    label,
    placeholder,
    selectedOption,
  } = props;
  return (
    <Button
      fullWidth
      {...styles('root', {}, props)}
      aria-haspopup
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      data-hook={DATA_HOOKS.base}
      disabled={disabled}
      suffixIcon={
        <ArrowIcon
          className={styles.arrowIcon}
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      }
    >
      {label} {(selectedOption && selectedOption.value) || placeholder}
    </Button>
  );
};
