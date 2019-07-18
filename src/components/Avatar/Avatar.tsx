import * as React from 'react';

import { Avatar as CoreAvatar } from 'wix-ui-core/avatar';

import styles from './Avatar.st.css';
import { ReactComponent as Anonymous } from '../../assets/icons/Anonymous.svg';

export enum AvatarSize {
  xLarge = 'xLarge',
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export interface AvatarProps {
  /** User's name. Optional. Used in a case when avatar image src is missing or is invalid. */
  name?: string;
  /** Avatar's size. Optional. Defaults to 'medium'. One of 'xLarge' | 'large' | 'medium' | 'small'. */
  size?: AvatarSize;
  /** Avatar's image src. Optional. */
  src?: string;
}

interface DefaultProps {
  size: AvatarSize;
}

/** Avatar is a type of element that visually represents a user, either as an image, placeholder or text (name initials). */
export class Avatar extends React.Component<AvatarProps> {
  static displayName = 'Avatar';
  static defaultProps: DefaultProps = {
    size: AvatarSize.medium,
  };
  static dimmentionBySize = {
    [AvatarSize.xLarge]: 60,
    [AvatarSize.large]: 52,
    [AvatarSize.medium]: 36,
    [AvatarSize.small]: 28,
  };

  render() {
    const { size, src, name, ...rest } = this.props;

    return (
      <CoreAvatar
        {...styles('root', { size }, rest)}
        imgProps={{ src }}
        placeholder={
          <Anonymous
            height={Avatar.dimmentionBySize[size]}
            width={Avatar.dimmentionBySize[size]}
          />
        }
        name={name && name.split(' ')[0]}
      />
    );
  }
}
