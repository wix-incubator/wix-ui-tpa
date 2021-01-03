import * as React from 'react';
import { Text, TYPOGRAPHY } from '../Text';
import { st, classes } from './DropdownOption.st.css';
import { TPAComponentProps } from '../../types';

export interface DropdownOptionProps {
  id?: string;
  value?: string;
  subtitle?: string;
  isSelectable?: boolean;
  isSectionTitle?: boolean;
  icon?: React.ReactElement;
  divider?: boolean;
}

export const DropdownOption: React.FC<
  DropdownOptionProps & TPAComponentProps
> = (props) => {
  const {
    value,
    id,
    isSelectable,
    subtitle,
    icon,
    isSectionTitle,
    className,
  } = props;
  return (
    <div
      key={id}
      className={st(
        classes.root,
        {
          withIcon: !!icon,
          sectionTitle: isSectionTitle,
          selectable: isSelectable,
        },
        className,
      )}
    >
      {icon && <div className={classes.icon}>{icon}</div>}
      <div className={classes.contentWrapper}>
        <Text className={classes.title} typography={TYPOGRAPHY.runningText}>
          {value}
        </Text>
        {subtitle && (
          <Text
            className={classes.subtitle}
            typography={TYPOGRAPHY.runningText}
          >
            {subtitle}
          </Text>
        )}
      </div>
    </div>
  );
};
