import * as React from 'react';
import { TPAComponentsConsumer } from '../../TPAComponentsConfig';
import styles from './ActionsMenuLayoutItem.st.css';
import { Text } from '../../Text';
import { ACTIONS_MENU_ITEM_DATA_HOOK } from '../dataHooks';

export enum Alignment {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface ActionsMenuLayoutItemProps {
  prefixIcon?: React.ReactNode;
  /** the item's content */
  content: string;
  /** the subtitle of the item */
  subtitle?: string;
  disabled?: boolean;
  onClick(): void;
  alignment?: Alignment;
}

/** ActionsMenuLayout */
export class ActionsMenuLayoutItem extends React.Component<
  ActionsMenuLayoutItemProps
> {
  static displayName = 'ActionsMenuLayout.Item';

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
        {({ mobile, rtl }) => (
          <li
            key={content}
            {...styles(
              'root',
              { mobile, rtl, disabled, alignment, withIcon: !!prefixIcon },
              rest,
            )}
            role="menuitem"
            tabIndex={-1}
            aria-disabled={disabled}
            data-hook={ACTIONS_MENU_ITEM_DATA_HOOK}
            data-content={content}
            onClick={disabled ? undefined : onClick}
          >
            <div className={styles.container}>
              {prefixIcon ? (
                <div className={styles.iconContainer}>
                  <div className={styles.icon}>{prefixIcon}</div>
                </div>
              ) : null}
              <div className={styles.textContainer}>
                <div className={styles.text}>
                  <Text className={styles.content}>{content}</Text>
                  {subtitle && (
                    <Text className={styles.subtitle}>{subtitle}</Text>
                  )}
                </div>
              </div>
            </div>
          </li>
        )}
      </TPAComponentsConsumer>
    );
  }
}
