import * as React from 'react';
import { TPAComponentProps } from '../../types';

import { AddItem as WSRAddItem, ThemeProvider } from 'wix-style-react';
import { theme } from './WSRTheme';

import { st, classes } from './AddItem.st.css';

export enum SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large',
  xLarge = 'xLarge',
}

export enum ALIGNMENT {
  center = 'center',
  right = 'right',
  left = 'left',
}

const WSR_SIZE_MAP = {
  [SIZE.small]: 'tiny',
  [SIZE.medium]: 'small',
  [SIZE.large]: 'medium',
  [SIZE.xLarge]: 'large',
};

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
    size: SIZE.small,
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

    const rootClassName = st(classes.root, className);

    return (
      <ThemeProvider theme={theme(rootClassName)}>
        <WSRAddItem
          className={st(classes.wsrAddItemRoot, { hasError }, className)}
          dataHook={this.props['data-hook']}
          disabled={disabled}
          theme="dashes"
          alignItems={alignment}
          // @ts-ignore
          size={WSR_SIZE_MAP[size]}
          onClick={onClick}
        >
          {() => children}
        </WSRAddItem>
      </ThemeProvider>
    );
  }
}
