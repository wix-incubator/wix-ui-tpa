import * as React from 'react';
import { ChevronDownSmall } from 'wix-ui-icons-common/dist/src';
import { DATA_HOOKS, ICON_SIZE } from './constants';

import styles from './DropdownBase.st.css';
import { Button } from '../Button';

interface DropdownBaseProps {
  value: string;
  placeholder: string;
  disabled: boolean;
  error: boolean;
}

export const DropdownBase = (props: DropdownBaseProps) => {
  const { value, placeholder, error, disabled } = props;
  return (
    <Button
      fullWidth
      {...styles('root', { error, placeholder: !value }, props)}
      data-hook={DATA_HOOKS.base}
      data-dropdown-base-error={error}
      disabled={disabled}
      suffixIcon={
        <ChevronDownSmall
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
