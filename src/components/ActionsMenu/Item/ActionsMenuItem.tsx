import * as React from 'react';
import { TPAComponentsConsumer } from '../../TPAComponentsConfig';
import styles from './ActionsMenuItem.st.css';
import { Text } from '../../Text';
import { Alignment } from '../ActionsMenu';

export interface ActionsMenuItemProps {
  prefixIcon?: React.ReactNode;
  /** the item's content */
  content: string;
  /** the subtitle of the item */
  subtitle?: string;
  disabled?: boolean;
  onClick(): void;
}

/** ActionsMenu */
export class ActionsMenuItem extends React.Component<
  ActionsMenuItemProps & { alignment: Alignment }
> {
  static displayName = 'ActionsMenu.Item';

  render() {
    const {
      content,
      prefixIcon,
      subtitle,
      disabled,
      onClick,
      alignment,
      ...rest
    } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <li
            key={content}
            {...styles(styles.root, { mobile, disabled, alignment }, rest)}
            role="menuitem"
            tabIndex={-1}
            aria-disabled={disabled}
            onClick={disabled ? () => {} : onClick}
          >
            <div {...styles(styles.container, {})}>
              <div {...styles(styles.icon, {})}>{prefixIcon}</div>
              <div {...styles(styles.spaceContainer, {})} />
              <div {...styles(styles.text, {})}>
                <Text {...styles(styles.content, {})}>{content}</Text>
                {subtitle && (
                  <Text {...styles(styles.subtitle, {})}>{subtitle}</Text>
                )}
              </div>
            </div>
          </li>
        )}
      </TPAComponentsConsumer>
    );
  }
}
