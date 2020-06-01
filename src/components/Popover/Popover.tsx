import * as React from 'react';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';
import { IconButton } from '../IconButton';
import styles from './Popover.st.css';

export interface PopoverProps {
  rightToLeft?: boolean;
}

interface DefaultProps {
  rightToLeft: boolean;
}

/** Popover */
export class Popover extends React.Component<PopoverProps> {
  static displayName = 'Popover';
  static defaultProps: DefaultProps = {
    rightToLeft: false
  };

  render() {
    const { children, rightToLeft, ...rest } = this.props;

    return (
      <div {...styles('root', { rightToLeft }, rest)}>
        {children}
        <IconButton {...styles('close', {})} as="a" icon={<Close />} />
      </div>
    );
  }
}
