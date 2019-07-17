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
  items?: Array<AvatarGroupItem>;
  maxAmount?: number;
  size?: AvatarGroupSize;
}

interface DefaultProps {
  items: Array<AvatarGroupItem>;
  maxAmount: number;
  size: AvatarGroupSize;
}

/** The Avatar group is made up of a group of avatars and an optional text link. Content in text link can be customized to the product's intent. */
export class AvatarGroup extends React.Component<AvatarGroupProps, {}> {
  static displayName = 'AvatarGroup';
  static defaultProps: DefaultProps = {
    items:[],
    maxAmount: 5,
    size: AvatarGroupSize.medium,
  };

  render() {
    const {items, size,  ...rest } = this.props;

    return (
      <div {...styles('root', { size }, rest)}>
        {items.map(({name, src}) => (<Avatar name={name} src={src}/>))}
      </div>
    );
  }
}
