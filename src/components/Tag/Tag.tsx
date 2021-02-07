import * as React from 'react';
import cls from 'classnames';

import { TPAComponentProps } from '../../types';
import { ReactComponent as XIcon } from '../../assets/icons/XSmall.svg';
import { Text, TYPOGRAPHY } from '../Text';
import { classes } from './Tag.st.css';
import { SIZE, SKIN } from './constants';

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

export const Tag: React.FC<TagProps> = (props) => {
  const {
    skin,
    size,
    isRemovable,
    onClick,
    onRemove,
    removeButtonAriaLabel,
    children,
    className,
    tagName,
  } = props;

  const isClickable = !!(onRemove || onClick);
  const TagName = isClickable ? 'button' : tagName;

  return (
    <TagName
      className={cls(classes.root, classes[skin], classes[size], className, {
        [classes.clickable]: isClickable,
        [classes.withIcon]: isRemovable,
      })}
      onClick={handleClick}
      data-hook={props['data-hook']}
    >
      <div className={classes.opaque} />
      <Text className={classes.label} typography={TYPOGRAPHY.listText}>
        {children}
      </Text>
      {isRemovable && (
        <span
          className={classes.iconWrapper}
          aria-label={removeButtonAriaLabel}
          data-hook="remove-icon"
        >
          <XIcon className={classes.removeIcon} />
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
