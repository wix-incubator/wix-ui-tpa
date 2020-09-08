import * as React from 'react';

import { Avatar as CoreAvatar } from 'wix-ui-core/avatar';

import { st, classes } from './Avatar.st.css';
import { ReactComponent as Anonymous } from '../../assets/icons/Anonymous.svg';
import { TPAComponentProps } from '../../types';

export enum AvatarSize {
  xLarge = 'xLarge',
  large = 'large',
  medium = 'medium',
  small = 'small',
  xSmall = 'xSmall',
  xxSmall = 'xxSmall',
}

export interface AvatarProps extends TPAComponentProps {
  /** User's name. Optional. Used in a case when avatar image src is missing or is invalid. */
  name?: string;
  /** Avatar's size. Optional. Defaults to 'medium'. One of 'xLarge' | 'large' | 'medium' | 'small' | 'xSmall' | 'xxSmall' . */
  size?: AvatarSize;
  /** Avatar's image src. Optional. */
  src?: string;
  /** Avatar's image onLoad callback. Optional. */
  onLoad?: React.EventHandler<React.SyntheticEvent>;
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
    [AvatarSize.xSmall]: 20,
    [AvatarSize.xxSmall]: 16,
  };

  render() {
    const { size, src, name, onLoad, className } = this.props;

    return (
      <CoreAvatar
        className={st(classes.root, { size }, className)}
        imgProps={src ? { src, onLoad } : undefined}
        placeholder={
          <Anonymous
            height={Avatar.dimmentionBySize[size]}
            width={Avatar.dimmentionBySize[size]}
          />
        }
        name={name && name.split(' ')[0]}
        data-hook={this.props['data-hook']}
      />
    );
  }
}
