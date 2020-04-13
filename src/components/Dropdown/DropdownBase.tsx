import * as React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/icons/CaretDown.svg';

import { Button } from '../Button';
import { TPAComponentProps } from '../../types';

import { DATA_HOOKS, ICON_SIZE } from './constants';
import { DropdownOptionProps } from './DropdownOption';

import styles from './DropdownBase.st.css';

interface DropdownBaseProps {
  selectedOption: DropdownOptionProps;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  upgrade: boolean;
  rtl: boolean;
}

export const DropdownBase = (props: DropdownBaseProps & TPAComponentProps) => {
  const {
    selectedOption,
    placeholder,
    error,
    disabled,
    upgrade,
    ['aria-label']: ariaLabel,
    ['aria-labelledby']: ariaLabelledBy,
    rtl,
  } = props;
  const hasPlaceholder = !selectedOption || !selectedOption.value;
  return (
    <Button
      upgrade={upgrade}
      fullWidth
      {...styles(
        'root',
        { error, placeholder: hasPlaceholder, upgrade, rtl },
        props,
      )}
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
      suffixIcon={
        <ArrowIcon
          className={styles.arrowIcon}
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      }
    >
      <div className={styles.childrenWrapper}>
        {(selectedOption && selectedOption.value) || placeholder}
      </div>
    </Button>
  );
};
