import * as React from 'react';

import { Avatar as CoreAvatar, AvatarProps as CoreAvatarProps } from 'wix-ui-core/avatar';

import styles from './Avatar.st.css';
import { ReactComponent as AnonymousSVG } from './Anonymous.svg';

export enum AvatarSize {
  xLarge = 'xLarge',
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export interface AvatarProps extends CoreAvatarProps  {
  name?: string;
  size?: AvatarSize;
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

  render() {
    const { size, src, name, ...rest } = this.props;

    return (
      <CoreAvatar
        {...rest}
        {...styles('root', { size }, rest)}
        imgProps={{ src }}
        placeholder={
          <AnonymousSVG
            height={dimmentionBySize(size)}
            width={dimmentionBySize(size)}
          />
        }
        text={name && name.split('')[0]}
      />
    );
  }
}

function dimmentionBySize(avatarSize: AvatarSize) {
  return {
    [AvatarSize.xLarge]: 60,
    [AvatarSize.large]: 52,
    [AvatarSize.medium]: 36,
    [AvatarSize.small]: 28,
  }[avatarSize];
}
