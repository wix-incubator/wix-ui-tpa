import * as React from 'react';
import { st, classes } from './AvatarGroup.st.css';
import { Avatar } from '../Avatar';
import { AvatarGroupTextButton } from './AvatarGroupTextButton';
import { TextButton } from '../TextButton';
import { TPAComponentProps } from '../../types';

export interface AvatarGroupItem {
  name?: string;
  src?: string;
  onLoad?: React.EventHandler<React.SyntheticEvent>;
}

export enum AvatarGroupSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xSmall = 'xSmall',
  xxSmall = 'xxSmall',
}

export interface AvatarGroupProps extends TPAComponentProps {
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
  static TextButton = AvatarGroupTextButton;

  getTextButton = () => {
    const { children } = this.props;
    const textButton = React.Children.toArray(children).find(
      (child) =>
        React.isValidElement(child) &&
        (child.type === TextButton || child.type === AvatarGroupTextButton),
    ) as React.ReactElement;
    if (textButton) {
      return React.cloneElement(textButton, {
        className: `${textButton.props.className || ''} ${classes.textButton}`,
        'data-hook': 'text-button',
      });
    }
  };

  render() {
    const { items, size, maxAmount, className } = this.props;

    const textButton = this.getTextButton();

    return (
      <div
        className={st(classes.root, { size }, className)}
        data-hook={this.props['data-hook']}
      >
        <div className={classes.avatars}>
          {items.slice(0, maxAmount).map(({ name, src, onLoad }, key) => (
            <div className={classes.avatarContainer} key={key}>
              <Avatar
                className={classes.avatar}
                data-hook="avatar"
                name={name}
                src={src}
                onLoad={onLoad}
              />
            </div>
          ))}
        </div>
        {textButton ? (
          <div className={classes.textButtonContainer}>{textButton}</div>
        ) : null}
      </div>
    );
  }
}
