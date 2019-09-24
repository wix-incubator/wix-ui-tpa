import * as React from 'react';
import styles from './ActionsMenu.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ActionsMenuItem } from './Item/ActionsMenuItem';
import { ACTIONS_MENU_DATA_KEYS } from './dataHooks';
import { ActionsMenuDivider } from './Divider/Divider';

export enum Alignment {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface ActionsMenuProps {
  alignment?: Alignment;
}

interface DefaultProps {
  alignment: Alignment;
}

/** ActionsMenu */
export class ActionsMenu extends React.Component<ActionsMenuProps> {
  static Item = ActionsMenuItem;
  static Divider = ActionsMenuDivider;

  static displayName = 'ActionsMenu';
  static defaultProps: DefaultProps = {
    alignment: Alignment.left,
  };

  getDataAttributes(mobile: boolean) {
    return {
      [ACTIONS_MENU_DATA_KEYS.mobile]: mobile,
    };
  }

  render() {
    const { alignment, children, ...rest } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ul
            {...styles('root', { mobile, alignment }, rest)}
            {...this.getDataAttributes(mobile)}
            role="menu"
            tabIndex={-1}
          >
            {React.Children.map(children, (child: React.ReactElement) =>
              child.type === ActionsMenuItem
                ? React.cloneElement(child, { className: styles.item })
                : child,
            )}
          </ul>
        )}
      </TPAComponentsConsumer>
    );
  }
}
