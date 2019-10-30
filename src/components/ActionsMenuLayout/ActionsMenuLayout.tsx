import * as React from 'react';
import styles from './ActionsMenuLayout.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ActionsMenuLayoutItem, Alignment } from './Item/ActionsMenuLayoutItem';
import { ACTIONS_MENU_DATA_KEYS } from './dataHooks';
import { ActionsMenuLayoutDivider } from './Divider/Divider';

export interface ActionsMenuLayoutProps {
  alignment?: Alignment;
}

/** ActionsMenuLayout */
export class ActionsMenuLayout extends React.Component<ActionsMenuLayoutProps> {
  static Item = ActionsMenuLayoutItem;
  static Divider = ActionsMenuLayoutDivider;

  static displayName = 'ActionsMenuLayout';

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
            {...styles('root', { mobile }, rest)}
            {...this.getDataAttributes(mobile)}
            role="menu"
            tabIndex={-1}
          >
            {React.Children.map(children, (child: React.ReactElement) =>
              child.type === ActionsMenuLayoutItem
                ? React.cloneElement(child, {
                    className: styles.item,
                    alignment,
                  })
                : child,
            )}
          </ul>
        )}
      </TPAComponentsConsumer>
    );
  }
}
