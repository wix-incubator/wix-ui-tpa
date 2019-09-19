import * as React from 'react';
import { TPAComponentsConsumer } from '../../TPAComponentsConfig';
import styles from './ActionsMenuItem.st.css';
import { Text } from '../../Text';
import { ACTIONS_MENU_ITEM_DATA_HOOK } from '../dataHooks';

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
export class ActionsMenuItem extends React.Component<ActionsMenuItemProps> {
  static displayName = 'ActionsMenu.Item';

  render() {
    const {
      content,
      prefixIcon,
      subtitle,
      disabled,
      onClick,
      ...rest
    } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <li
            key={content}
            {...styles('root', { mobile, disabled }, rest)}
            role="menuitem"
            tabIndex={-1}
            aria-disabled={disabled}
            data-hook={ACTIONS_MENU_ITEM_DATA_HOOK}
            data-content={content}
            onClick={disabled ? undefined : onClick}
          >
            <div className={styles.container}>
              <div>{prefixIcon}</div>
              <div className={styles.spaceContainer} />
              <div className={styles.text}>
                <Text className={styles.content}>{content}</Text>
                {subtitle && (
                  <Text className={styles.subtitle}>{subtitle}</Text>
                )}
              </div>
            </div>
          </li>
        )}
      </TPAComponentsConsumer>
    );
  }
}
