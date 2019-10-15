import * as React from 'react';

import { Text, TYPOGRAPHY } from '../Text';

import styles from './DropdownOption.st.css';

export interface DropdownOptionProps {
  id: string;
  value: string;
  subtitle?: string;
  isSelectable?: boolean;
  isSectionTitle?: boolean;
  icon?: React.ReactElement;
}

export const DropdownOption: React.FC<DropdownOptionProps> = props => {
  const { value, id, isSelectable, subtitle, icon, isSectionTitle } = props;
  return (
    <div key={id} {...styles('root', { withIcon: !!icon }, props)}>
      {icon && <div {...styles('icon')}>{icon}</div>}
      <div className={styles.contentWrapper}>
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
    </div>
  );
};
