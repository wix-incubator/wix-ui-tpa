import * as React from 'react';
import { ChevronDownSmall } from 'wix-ui-icons-common/dist/src';
import { Input, InputProps } from '../Input';
import { DATA_HOOKS, ICON_SIZE } from './constants';

import styles from './DropdownBase.st.css';

export const DropdownBase = (props: InputProps) => {
  return (
    <Input
      {...props}
      {...styles('root', { error: props.error }, props)}
      data-hook={DATA_HOOKS.base}
      data-dropdown-base-error={props.error}
      readOnly
      aria-label="selected-value"
      suffix={
        <ChevronDownSmall
          className={styles.arrowIcon}
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      }
    />
  );
};
