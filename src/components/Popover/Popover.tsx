import * as React from 'react';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';
import { IconButton } from '../IconButton';
import styles from './Popover.st.css';

export interface PopoverProps {}

interface DefaultProps {}

/** Popover */
export class Popover extends React.Component<PopoverProps> {
  static displayName = 'Popover';
  static defaultProps: DefaultProps = {};

  render() {
    const { children, ...rest } = this.props;

    return (
      <div {...styles('root', {}, rest)}>
        {children}
        <IconButton {...styles('close', {})} as="a" icon={<Close />} />
      </div>
    );
  }
}
