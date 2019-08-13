import * as React from 'react';
import styles from './ActionsMenu.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ActionsMenuItem } from './Item/ActionsMenuItem';
import { ActionsMenuDivider } from './Divider/Divider';

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
          <div key={alignment} {...styles('root', { mobile, alignment }, rest)}>
            {children}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
