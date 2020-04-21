import * as React from 'react';

import { ReactComponent as ArrowIcon } from '../../assets/icons/CaretDown.svg';
import { TextButton, TEXT_BUTTON_PRIORITY } from '../TextButton';
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
  value: string;
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
    value,
  } = props;
  return (
    <TextButton
      {...styles('root', {}, props)}
      aria-haspopup
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      data-hook={DATA_HOOKS.base}
      disabled={disabled}
      priority={TEXT_BUTTON_PRIORITY.secondary}
    >
      <div className={styles.content}>
        <span className={styles.textContent}>
          <div className={styles.label}>{label}</div>
          <div
            className={styles.selectedValue}
            data-hook={DATA_HOOKS.baseSelectedValue}
          >
            {value || placeholder}
          </div>
        </span>
        <ArrowIcon
          className={styles.arrowIcon}
          height={ICON_SIZE}
          width={ICON_SIZE}
        />
      </div>
    </TextButton>
  );
};
