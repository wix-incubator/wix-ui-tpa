import * as React from 'react';
import { st, classes } from './ActionsMenuLayout.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ActionsMenuLayoutItem, Alignment } from './Item/ActionsMenuLayoutItem';
import { ACTIONS_MENU_DATA_KEYS } from './dataHooks';
import { ActionsMenuLayoutDivider } from './ActionsMenuLayoutDivider/ActionsMenuLayoutDivider';
import { TPAComponentProps } from '../../types';

export interface ActionsMenuLayoutProps extends TPAComponentProps {
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
    const { alignment, children, className } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ul
            className={st(classes.root, { mobile }, className)}
            {...this.getDataAttributes(mobile)}
            data-hook={this.props['data-hook']}
            role="menu"
            tabIndex={-1}
          >
            {React.Children.map(children, (child: React.ReactElement) =>
              child.type === ActionsMenuLayoutItem
                ? React.cloneElement(child, {
                    className: classes.item,
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
