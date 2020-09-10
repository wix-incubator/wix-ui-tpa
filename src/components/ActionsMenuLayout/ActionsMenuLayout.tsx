import * as React from 'react';
import { st, classes } from './ActionsMenuLayout.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ActionsMenuLayoutItem, Alignment } from './Item/ActionsMenuLayoutItem';
import { ACTIONS_MENU_DATA_KEYS } from './dataHooks';
import { ActionsMenuLayoutDivider } from './ActionsMenuLayoutDivider/ActionsMenuLayoutDivider';
import { TPAComponentProps } from '../../types';
import { KEYS } from '../../common/keyCodes';

export interface ActionsMenuLayoutProps extends TPAComponentProps {
  alignment?: Alignment;
  focusedIndex?: number;
  /** a11y */
  'aria-labeledby'?: string;
}

/** ActionsMenuLayout */
export class ActionsMenuLayout extends React.Component<ActionsMenuLayoutProps> {
  static Item = ActionsMenuLayoutItem;
  static Divider = ActionsMenuLayoutDivider;

  static displayName = 'ActionsMenuLayout';
  state = {
    focusedIdx: 0,
  };

  liRefs = [];

  componentDidMount() {
    const { focusedIndex } = this.props;

    if (focusedIndex) {
      this.focusItem(focusedIndex);
    } else {
      this.focusItem(this.state.focusedIdx);
    }
  }

  // componentDidUpdate() {

  // }

  focusItem(idx: number) {
    this.setState(
      {
        focusedIdx: idx,
      },
      () => {
        this.liRefs[idx].liRef?.current.focus();
      },
    );
  }

  getDataAttributes(mobile: boolean) {
    return {
      [ACTIONS_MENU_DATA_KEYS.mobile]: mobile,
    };
  }

  getNextItemIdx(direction: 1 | -1): number {
    const nextItem = this.state.focusedIdx + direction;

    if (direction === 1) {
      return nextItem === this.liRefs.length ? 0 : nextItem;
    }

    return nextItem < 0 ? this.liRefs.length - 1 : nextItem;
  }

  _onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === KEYS.ArrowDown || e.key === KEYS.ArrowDownIE) {
      e.preventDefault(); // remove scroll on space
      this.focusItem(this.getNextItemIdx(1));
    }

    if (e.key === KEYS.ArrowUp || e.key === KEYS.ArrowUpIE) {
      e.preventDefault(); // remove scroll on space
      this.focusItem(this.getNextItemIdx(-1));
    }
  };

  addRef(ref, index: number) {
    if (ref) {
      if (
        this.liRefs.find(_ref => {
          return _ref?.props.content === ref.props.content;
        })
      ) {
        return;
      }

      this.liRefs[
        index === 0 || this.liRefs[index - 1] ? index : index - 1
      ] = ref;
    }
  }

  render() {
    const { alignment, children, className } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ul
            onKeyDown={this._onKeyDown}
            className={st(classes.root, { mobile }, className)}
            {...this.getDataAttributes(mobile)}
            data-hook={this.props['data-hook']}
            role="menu"
            aria-labelledby={this.props['aria-labeledby']}
          >
            {React.Children.map(children, (child: React.ReactElement, index) =>
              child.type === ActionsMenuLayoutItem
                ? React.cloneElement(child, {
                    className: classes.item,
                    alignment,
                    ref: _ref => {
                      this.addRef(_ref, index);
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
