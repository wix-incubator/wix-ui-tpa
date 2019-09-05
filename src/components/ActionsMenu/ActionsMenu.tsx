import * as React from 'react';
import styles from './ActionsMenu.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ActionsMenuItem } from './Item/ActionsMenuItem';
import { ACTIONS_MENU__DATA_KEYS } from './dataHooks';
import { Divider } from '../Divider';

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

function getDataAttributes(mobile: boolean) {
  return {
    [ACTIONS_MENU__DATA_KEYS.mobile]: mobile,
  };
}

/** ActionsMenu */
export class ActionsMenu extends React.Component<ActionsMenuProps> {
  static Item = ActionsMenuItem;
  static Divider = Divider;

  static displayName = 'ActionsMenu';
  static defaultProps: DefaultProps = {
    alignment: Alignment.left,
  };

  render() {
    const { alignment, children, ...rest } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ul
            key={alignment}
            {...styles(styles.root, { mobile, alignment }, rest)}
            {...getDataAttributes(mobile)}
            role="menu"
            tabIndex={-1}
          >
            {React.Children.map(children, (child: React.ReactElement) =>
              child.type === ActionsMenuItem
                ? React.cloneElement(child, styles(styles.item))
                : React.cloneElement(child, styles(styles.divider)),
            )}
          </ul>
        )}
      </TPAComponentsConsumer>
    );
  }
}
