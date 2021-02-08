import * as React from 'react';
import { st, classes } from './ActionsMenuLayout.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ActionsMenuLayoutItem, Alignment } from './Item/ActionsMenuLayoutItem';
import { ACTIONS_MENU_DATA_KEYS } from './dataHooks';
import { ActionsMenuLayoutDivider } from './ActionsMenuLayoutDivider/ActionsMenuLayoutDivider';
import { TPAComponentProps } from '../../types';
import { KEYS } from '../../common/keyCodes';

interface LiRefs {
  [key: number]: {
    liRef: React.RefObject<HTMLLIElement>;
  };
}
export interface ActionsMenuLayoutProps extends TPAComponentProps {
  alignment?: Alignment;
  /**
   * Provide item index which will be focused on initial render.
   * If prop is not provided, no item will be autofocused
   */
  focusedIndex?: number;
  /** a11y */
  'aria-labeledby'?: string;
  'aria-label'?: string;
}

/** ActionsMenuLayout */
export class ActionsMenuLayout extends React.Component<ActionsMenuLayoutProps> {
  static Item = ActionsMenuLayoutItem;
  static Divider = ActionsMenuLayoutDivider;

  static displayName = 'ActionsMenuLayout';

  state = {
    focusedIdx: this.props.focusedIndex ?? 0,
  };

  liRefs: LiRefs = {};

  componentDidMount() {
    const { focusedIndex } = this.props;
    if (focusedIndex) {
      this._focusItem(focusedIndex);
    }
  }

  getDataAttributes(mobile: boolean) {
    return {
      [ACTIONS_MENU_DATA_KEYS.mobile]: mobile,
    };
  }

  _getNextItemIdx(direction: 1 | -1): number {
    const nextItem = this.state.focusedIdx + direction;

    if (direction === 1) {
      return nextItem === Object.values(this.liRefs).length ? 0 : nextItem;
    }

    return nextItem < 0 ? Object.values(this.liRefs).length - 1 : nextItem;
  }

  _addRef(ref, index: number) {
    if (ref) {
      this.liRefs[index] = ref;
    }
  }

  _focusItem(idx: number) {
    this.setState(
      {
        focusedIdx: idx,
      },
      () => {
        Object.values(this.liRefs)[idx].liRef?.current.focus();
      },
    );
  }

  _onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === KEYS.ArrowDown || e.key === KEYS.ArrowDownIE) {
      e.preventDefault(); // remove scroll on space
      this._focusItem(this._getNextItemIdx(1));
    }

    if (e.key === KEYS.ArrowUp || e.key === KEYS.ArrowUpIE) {
      e.preventDefault(); // remove scroll on space
      this._focusItem(this._getNextItemIdx(-1));
    }
  };

  _onFocus = (e) => {
    const focusOnChild = !!Object.values(this.liRefs).find(
      (i) => i.liRef?.current === e.target,
    );
    //focus on initial list item after tab focusing
    if (!focusOnChild) {
      this._focusItem(0);
    }
  };

  //prevent firing focus after mouse click events
  _preventFocus = (e: React.SyntheticEvent) => e.preventDefault();

  render() {
    const { alignment, children, className } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ul
            onFocus={this._onFocus}
            onMouseDown={this._preventFocus}
            onKeyDown={this._onKeyDown}
            className={st(classes.root, { mobile }, className)}
            {...this.getDataAttributes(mobile)}
            data-hook={this.props['data-hook']}
            role="menu"
            aria-labelledby={this.props['aria-labeledby']}
            aria-label={this.props['aria-label']}
            tabIndex={0}
          >
            {React.Children.map(children, (child: React.ReactElement, index) =>
              child.type === ActionsMenuLayoutItem
                ? React.cloneElement(child, {
                    className: classes.item,
                    alignment,
                    ref: (_ref) => {
                      this._addRef(_ref, index);
                    },
                  })
                : child,
            )}
          </ul>
        )}
      </TPAComponentsConsumer>
    );
  }
}
