import * as React from 'react';
import { ChevronDownSmall } from 'wix-ui-icons-common/dist/src';
import { Input, InputProps } from '../Input';
import { ICON_SIZE } from './constants';

import styles from './DropdownInput.st.css';

export const DropdownInput = (props: InputProps) => {
  return (
    <Input
      {...props}
      {...styles('root', { error: props.error }, props)}
      readOnly
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
