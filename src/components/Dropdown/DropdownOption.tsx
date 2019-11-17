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
    <div
      key={id}
      {...styles(
        'root',
        {
          withIcon: !!icon,
          sectionTitle: isSectionTitle,
          selectable: isSelectable,
        },
        props,
      )}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.contentWrapper}>
        <Text className={styles.title} typography={TYPOGRAPHY.runningText}>
          {value}
        </Text>
        {subtitle && (
          <Text className={styles.subtitle} typography={TYPOGRAPHY.runningText}>
            {subtitle}
          </Text>
        )}
      </div>
    </div>
  );
};
