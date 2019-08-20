import * as React from 'react';
import styles from './ActionsMenu.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ActionsMenuItem } from './Item/ActionsMenuItem';
import { ActionsMenuDivider } from './Divider/Divider';
import {TABS_DATA_KEYS} from "../Tabs/dataHooks";
import {ACTIONS_MENU__DATA_KEYS} from "./dataHooks";

export enum Alignment {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface ActionsMenuProps {
  alignment?: Alignment;
  onBlur?(): void;
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
  static Divider = ActionsMenuDivider;

  static displayName = 'ActionsMenu';
  static defaultProps: DefaultProps = {
    alignment: Alignment.left,
  };

  render() {
    const { onBlur, alignment, children, ...rest } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div key={alignment} {...styles('root', { mobile, alignment }, rest)} {...getDataAttributes(mobile)}>
            {children}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
