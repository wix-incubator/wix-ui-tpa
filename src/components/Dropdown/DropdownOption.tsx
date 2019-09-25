import * as React from 'react';

import { Text, TYPOGRAPHY } from '../Text';

import styles from './DropdownOption.st.css';

interface DropdownOptionProps {
  id: any;
  value: string;
  subtitle: string;
  isSelectable: boolean;
  isSectionTitle: boolean;
}

export const DropdownOption: React.FC<any> = props => {
  const { value, id, isSelectable, subtitle, icon, isSectionTitle } = props;
  return (
    <div key={id} {...styles('root', {}, props)}>
      <Text
        {...styles(
          'title',
          {
            sectionTitle: isSectionTitle,
            selectable: isSelectable,
          },
          props,
        )}
        typography={TYPOGRAPHY.runningText}
      >
        {value}
      </Text>
      {subtitle && (
        <Text
          {...styles('subtitle', {}, props)}
          typography={TYPOGRAPHY.runningText}
        >
          {subtitle}
        </Text>
      )}
    </div>
  );
};
