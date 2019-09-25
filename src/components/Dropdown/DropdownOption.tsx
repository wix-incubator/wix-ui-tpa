import * as React from 'react';

import { Text, TYPOGRAPHY } from '../Text';

import styles from './DropdownOption.st.css';
import { Heart } from 'wix-ui-icons-common/dist/src';

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
    <div key={id} {...styles('root', { withIcon: icon }, props)}>
      {icon && (
        <div {...styles('icon')}>
          <Heart />
        </div>
      )}
      <div>
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
