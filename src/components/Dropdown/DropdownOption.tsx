import * as React from 'react';
import { Input } from '../Input';
import { Text } from '../Text';

import styles from './DropdownOption.st.css';

interface DropdownOptionProps {
  id: any;
  value: string;
  subtitle: string;
  isDisabled: boolean;
}

export const DropdownOption: React.FC<DropdownOptionProps> = props => {
  const { value, id, isDisabled, subtitle } = props;
  return (
    <div key={id} {...styles('root', {}, props)}>
      <Input
        {...styles('mainValue', {}, props)}
        value={value}
        readOnly
        disabled={isDisabled}
      />
      {subtitle && (
        <Input
          {...styles('subtitle', {}, props)}
          value={subtitle}
          readOnly
          disabled
        />
      )}
    </div>
  );
};
