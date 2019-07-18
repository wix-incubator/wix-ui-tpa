import * as React from 'react';
import styles from './AvatarGroup.st.css';
import { Avatar } from '../Avatar';

export interface AvatarGroupItem {
  name?: string;
  src?: string;
}

export enum AvatarGroupSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xSmall = 'xSmall',
  xxSmall = 'xxSmall',
}

export interface AvatarGroupProps {
  /** Array of Avatar items. Optional. Avatar item structure: {name?: 'Username', src?: 'https://link-to-image'}. All fields are optional. */
  items?: AvatarGroupItem[];
  /** Max amount of items shown in summary. Optional. Defaults to 5. */
  maxAmount?: number;
  /** Avatar's size. Optional. Dafaults to 'medium'. One of 'large' | 'medium' | 'small' | 'xSmall' | 'xxSmall'. */
  size?: AvatarGroupSize;
}

interface DefaultProps {
  items: AvatarGroupItem[];
  maxAmount: number;
  size: AvatarGroupSize;
}

/** The Avatar group is made up of a group of avatars and an optional text link. Content in text link can be customized to the product's intent. */
export class AvatarGroup extends React.Component<AvatarGroupProps> {
  static displayName = 'AvatarGroup';
  static defaultProps: DefaultProps = {
    items: [],
    maxAmount: 5,
    size: AvatarGroupSize.medium,
  };

  render() {
    const { items, size, maxAmount, ...rest } = this.props;

    return (
      <div {...styles('root', { size }, rest)}>
        {items.slice(0, maxAmount).map(({ name, src }, key) => (
          <div className={styles.avatarContainer} key={key}>
            <Avatar
              className={styles.avatar}
              data-hook="avatar"
              name={name}
              src={src}
            />
          </div>
        ))}
      </div>
    );
  }
}
