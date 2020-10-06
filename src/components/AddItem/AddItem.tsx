import * as React from 'react';
import { TPAComponentProps } from '../../types';

import { AddItem as WSRAddItem } from 'wix-style-react';

import { st, classes } from './AddItem.st.css';

export enum SIZE {
  tiny = 'tiny',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum ALIGNMENT {
  center = 'center',
  right = 'right',
  left = 'left',
}

export interface AddItemProps extends TPAComponentProps {
  /** Applies disabled styles */
  disabled?: boolean;
  /** Applies error styles */
  hasError?: boolean;
  /** Content horizontal alignment */
  alignment?: ALIGNMENT;
  /** Size to control the sizes of the text and the icon  */
  size?: SIZE;
  /** Could be any renderable node */
  children?: React.ReactNode;
  /** Click event handler  */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface DefaultProps {
  disabled: boolean;
  hasError: boolean;
  alignment: ALIGNMENT;
  size: SIZE;
}

/** Add Item is a component used to add new items to an existing items list. */
export class AddItem extends React.Component<AddItemProps> {
  static displayName = 'AddItem';
  static defaultProps: DefaultProps = {
    disabled: false,
    hasError: false,
    alignment: ALIGNMENT.center,
    size: SIZE.tiny,
  };

  render() {
    const {
      className,
      children,
      disabled,
      alignment,
      size,
      hasError,
      onClick,
    } = this.props;

    return (
      <WSRAddItem
        className={st(classes.root, { hasError }, className)}
        dataHook={this.props['data-hook']}
        children={children}
        disabled={disabled}
        theme="dashes"
        alignItems={alignment}
        size={size}
        onClick={onClick}
      />
    );
  }
}
