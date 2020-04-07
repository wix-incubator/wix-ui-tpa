import * as React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/icons/CaretDown.svg';

import { Button } from '../Button';
import { TPAComponentProps } from '../../types';

import { DATA_HOOKS, ICON_SIZE } from './constants';

import styles from './DropdownBase.st.css';

interface DropdownBaseProps {
  value?: string;
  icon?: React.ReactNode;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export const DropdownBase = (props: DropdownBaseProps & TPAComponentProps) => {
  const {
    value,
    icon,
    placeholder,
    error,
    disabled,
    ['aria-label']: ariaLabel,
    ['aria-labelledby']: ariaLabelledBy,
  } = props;
  const hasPlaceholder = !value;
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
      prefixIcon={icon ? <div className={styles.optionIcon}>{icon}</div> : null}
      suffixIcon={
        <ArrowIcon
          className={styles.arrowIcon}
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      }
    >
      {value || placeholder}
    </Button>
  );
};
