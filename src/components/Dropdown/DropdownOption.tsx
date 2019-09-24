import * as React from 'react';
import { Input } from '../Input';

import styles from './DropdownOption.st.css';

interface DropdownOptionProps {
  id: number;
  value: string;
  isDisabled: boolean;
}

export const DropdownOption: React.FC<DropdownOptionProps> = props => {
  const { value, id, isDisabled } = props;
  return (
    <div key={id} {...styles('root', {}, props)}>
      <Input
        className={styles.option}
        value={value}
        readOnly
        disabled={isDisabled}
      />
    </div>
  );
};
