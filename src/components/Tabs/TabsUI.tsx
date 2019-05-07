import * as React from 'react';
import classNames from 'classnames';
import { ChevronLeft, ChevronRight } from 'wix-ui-icons-common';
import { ALIGNMENT, VARIANT } from './constants';
import { KEY_CODES } from '../../common/constants';
import { Tab } from './Tab';
import style from './Tabs.st.css';

const isEqual = require('lodash/isEqual');

export function isSelectKey(keyCode: number) {
  switch (keyCode) {
    case KEY_CODES.ENTER:
    case KEY_CODES.SPACEBAR:
      return true;
    default:
      return false;
  }
}

export interface TabItem {
  /** Title of the tab */
  title?: string;
}

interface TabsUIProps {
  items: TabItem[];
  onTabClick?(index: number): void;
  activeTabIndex?: number;
  alignment?: ALIGNMENT;
  variant?: VARIANT;
  onScroll(event: React.SyntheticEvent<HTMLElement>): void;
  onLeftNavClick(): void;
  onRightNavClick(): void;
  navRef: React.RefObject<HTMLElement>;
  selectedTabRef: React.RefObject<HTMLDivElement>;
}

interface TabsUIRect {
  left: number;
  width: number;
}

interface TabsUIState {
  activeIndicatorRect: TabsUIRect;
}

class TabsUI extends React.PureComponent<TabsUIProps, TabsUIState> {
  state = {
    activeIndicatorRect: {
      left: 0,
      width: 0,
    },
  };

  componentDidMount() {
    setTimeout(this._updateSelectedTabPosition, 200);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.activeTabIndex !== this.props.activeTabIndex ||
      !isEqual(prevProps.items, this.props.items) ||
      prevProps.alignment !== this.props.alignment ||
      !isEqual(prevProps.items, this.props.items) ||
      prevProps.variant !== this.props.variant
    ) {
      this._updateSelectedTabPosition();
    }
  }

  _updateSelectedTabPosition = () => {
    const { selectedTabRef } = this.props;

    if (selectedTabRef && selectedTabRef.current) {
      const newLeft = selectedTabRef.current.offsetLeft;
      const newWidth = selectedTabRef.current.offsetWidth;

      this.setState({
        activeIndicatorRect: { left: newLeft, width: newWidth },
      });
    }
  };

  _getTabItem = (item: TabItem, index: number) => {
    const { activeTabIndex, onTabClick, selectedTabRef } = this.props;
    const isActive = activeTabIndex === index;

    return (
      <Tab
        key={`${item.title}-${index}`}
        title={item.title}
        index={index}
        className={classNames(style.tab, {
          [style.activeTab]: isActive,
        })}
        onClick={onTabClick}
        tabRef={isActive ? selectedTabRef : null}
      />
    );
  };

  _getNavigationItems() {
    const { activeIndicatorRect } = this.state;
    const { items, onScroll, navRef } = this.props;

    return (
      <div className={style.tabs}>
        <nav ref={navRef} onScroll={onScroll}>
          {items.map(this._getTabItem)}
          <div
            className={style.selectedIndicator}
            style={activeIndicatorRect}
          />
        </nav>
      </div>
    );
  }

  _getNavButton(
    icon: React.ReactElement,
    className: string,
    onClick: React.MouseEventHandler,
    onKeyDown: React.KeyboardEventHandler,
  ) {
    return (
      <div
        className={classNames(style.navBtn, className)}
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        {React.cloneElement(icon, { size: 35 })}
      </div>
    );
  }

  _getLeftNavButton() {
    const { onLeftNavClick } = this.props;

    const onNavKeyDownLeft = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const keyCode = e.keyCode;

      if (isSelectKey(keyCode)) {
        onLeftNavClick();
        return false;
      }
    };

    return this._getNavButton(
      <ChevronLeft />,
      style.navBtnLeft,
      onLeftNavClick,
      onNavKeyDownLeft,
    );
  }

  _getRightNavButton() {
    const { onRightNavClick } = this.props;

    const onNavKeyDownRight = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const keyCode = e.keyCode;

      if (isSelectKey(keyCode)) {
        onRightNavClick();
        return false;
      }
    };

    return this._getNavButton(
      <ChevronRight />,
      style.navBtnRight,
      onRightNavClick,
      onNavKeyDownRight,
    );
  }

  render() {
    return (
      <div className={style.content}>
        {this._getLeftNavButton()}
        {this._getNavigationItems()}
        {this._getRightNavButton()}
      </div>
    );
  }
}

export { TabsUI };
