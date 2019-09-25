import * as React from 'react';
import { Input } from '../Input';
import { Heart } from 'wix-ui-icons-common/dist/src';

import styles from './DropdownOption.st.css';

interface DropdownOptionProps {
  id: any;
  value: string;
  subtitle: string;
  isDisabled: boolean;
  isSectionTitle: boolean;
}

export const DropdownOption: React.FC<any> = props => {
  const { value, id, isDisabled, subtitle, icon, isSectionTitle } = props;
  return (
    <div key={id} {...styles('root', {}, props)}>
      <Input
        {...styles('mainValue', { sectionTitle: isSectionTitle }, props)}
        value={value}
        readOnly
        disabled={isDisabled}
        prefix={icon && <Heart />}
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
