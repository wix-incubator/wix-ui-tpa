import * as React from 'react';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';
import { IconButton } from '../IconButton';
import { POPOVER_DATA_HOOKS, POPOVER_DATA_KEYS } from './dataHooks';
import styles from './Popover.st.css';

export interface PopoverProps {
  rightToLeft?: boolean;
}

interface DefaultProps {
  rightToLeft: boolean;
  'data-hook': string;
}

/** Popover */
export class Popover extends React.Component<PopoverProps> {
  static displayName = 'Popover';
  static defaultProps: DefaultProps = {
    rightToLeft: false,
    'data-hook': POPOVER_DATA_HOOKS.Popover,
  };

  getDataAttributes = () => {
    const { rightToLeft } = this.props;
    return {
      [POPOVER_DATA_KEYS.RightToLeft]: rightToLeft,
    };
  };

  render() {
    const { children, rightToLeft, ...rest } = this.props;

    return (
      <div
        {...styles('root', { rightToLeft }, rest)}
        data-hook={this.props['data-hook']}
        {...this.getDataAttributes()}
      >
        <div className={styles.children}>{children}</div>
        <IconButton {...styles('close', {})} as="a" icon={<Close />} />
      </div>
    );
  }
}
