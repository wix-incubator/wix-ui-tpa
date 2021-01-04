import * as React from 'react';
import { TPAComponentProps } from '../../types';

import { Text, TYPOGRAPHY } from '../Text';
import { classes, st } from './Tag.st.css';
import { SIZE, SKIN } from './constants';
import { ReactComponent as CloseIcon } from '../../assets/icons/Close.svg';

export interface TagProps extends TPAComponentProps {
  onClick?: React.MouseEventHandler;
  onRemove?: React.MouseEventHandler;

  isRemovable?: boolean;
  tagName?: keyof JSX.IntrinsicElements;
  removeButtonAriaLabel?: string;
  removeButtonAriaLabelledBy?: string;
  children?: string;
  size?: SIZE;
  skin?: SKIN;
}

export const Tag: React.FC<TagProps> = props => {
  const {
    skin,
    size,
    isRemovable,
    onClick,
    onRemove,
    removeButtonAriaLabel,
    children,
    className,
    tagName: TagName,
  } = props;

  return (
    <TagName
      className={st(
        classes.root,
        {
          skin,
          size,
          removable: isRemovable,
          clickable: !!(onRemove || onClick),
        },
        className,
      )}
      onClick={handleClick}
    >
      <Text className={classes.label} typography={TYPOGRAPHY.listText}>
        {children}
      </Text>
      {isRemovable && (
        <span
          className={classes.iconWrapper}
          aria-label={removeButtonAriaLabel}
        >
          <CloseIcon className={classes.removeIcon} />
        </span>
      )}
    </TagName>
  );

  function handleClick(event) {
    if (isRemovable) {
      return onRemove(event);
    }

    return onClick ? onClick(event) : null;
  }
};

Tag.displayName = 'Tag';

Tag.defaultProps = {
  isRemovable: false,
  tagName: 'li',
  size: SIZE.medium,
  skin: SKIN.solid,
};
