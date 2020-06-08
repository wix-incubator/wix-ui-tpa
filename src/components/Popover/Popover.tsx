import * as React from 'react';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { POPOVER_DATA_HOOKS, POPOVER_DATA_KEYS } from './dataHooks';
import styles from './Popover.st.css';

export interface PopoverProps {
  title?: string;
  onClose(): void;
}

interface DefaultProps {
  title: string;
  'data-hook': string;
}

/** Popover */
export class Popover extends React.Component<PopoverProps> {
  static displayName = 'Popover';
  static defaultProps: DefaultProps = {
    title: '',
    'data-hook': POPOVER_DATA_HOOKS.Popover,
  };

  getDataAttributes = () => {
  };

  render() {
    const { children, title, onClose, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => {
          return (
            <div
              {...styles('root', { rtl }, rest)}
              data-hook={this.props['data-hook']}
              {...this.getDataAttributes()}
            >
              <div className={styles.container}>
                {title && <Text className={styles.title}>{title}</Text>}
                {children}
              </div>
              <IconButton
                className={styles.close}
                onClick={onClose}
                as="a"
                icon={<Close />}
              />
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}
