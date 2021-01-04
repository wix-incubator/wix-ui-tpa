import * as React from 'react';
import { TPAComponentsConsumer } from '../../TPAComponentsConfig';
import { st, classes } from './ActionsMenuLayoutItem.st.css';
import { Text } from '../../Text';
import { ACTIONS_MENU_ITEM_DATA_HOOK } from '../dataHooks';
import { TPAComponentProps } from '../../../types';
import { isSelectKey } from '../../../common/keyCodes';

export enum Alignment {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface ActionsMenuLayoutItemProps extends TPAComponentProps {
  prefixIcon?: React.ReactNode;
  /** the item's content */
  content: string;
  /** the subtitle of the item */
  subtitle?: string;
  disabled?: boolean;
  onClick(): void;
  alignment?: Alignment;
  /** a11y */
  'aria-label'?: string;
}

/** ActionsMenuLayout */
export class ActionsMenuLayoutItem extends React.Component<ActionsMenuLayoutItemProps> {
  private readonly liRef = React.createRef<HTMLLIElement>();
  static displayName = 'ActionsMenuLayout.Item';

  focus() {
    if (this.liRef.current) {
      this.liRef.current.focus();
    }
  }

  _onKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (!this.props.disabled && isSelectKey(e)) {
      e.preventDefault();
      this.props.onClick();
    }
  };

  render() {
    const {
      content,
      prefixIcon,
      subtitle,
      disabled,
      onClick,
      alignment,
      className,
    } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile, rtl }) => (
          <li
            onKeyDown={this._onKeyDown}
            aria-label={this.props['aria-label']}
            tabIndex={-1}
            ref={this.liRef}
            key={content}
            className={st(
              classes.root,
              { mobile, rtl, disabled, alignment, withIcon: !!prefixIcon },
              className,
            )}
            role="menuitem"
            aria-disabled={disabled}
            data-hook={ACTIONS_MENU_ITEM_DATA_HOOK}
            data-content={content}
            onClick={disabled ? undefined : onClick}
          >
            <div className={classes.container}>
              {prefixIcon ? (
                <div className={classes.iconContainer}>
                  <div className={classes.icon}>{prefixIcon}</div>
                </div>
              ) : null}
              <div className={classes.textContainer}>
                <div className={classes.text}>
                  <Text className={classes.content}>{content}</Text>
                  {subtitle && (
                    <Text className={classes.subtitle}>{subtitle}</Text>
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
