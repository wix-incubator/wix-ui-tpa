import * as React from 'react';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { ChevronLeft, ChevronRight } from 'wix-ui-icons-common';
import { ALIGNMENT, VARIANT } from './constants';
import { KEY_CODES } from '../../common/constants';
import { Tab } from './Tab';
import style from './Tabs.st.css';

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
  onScroll(event: React.SyntheticEvent<HTMLDivElement>): void;
  onLeftNavClick(): void;
  onRightNavClick(): void;
  wrapperRef: React.RefObject<HTMLDivElement>;
  navRef: React.RefObject<HTMLElement>;
  selectedTabRef: React.RefObject<HTMLDivElement>;
  rtl: boolean;
}

interface TabsUIRect {
  verticalPos: number;
  width: number;
}

interface TabsUIState {
  activeIndicatorRect: TabsUIRect;
}

class TabsUI extends React.PureComponent<TabsUIProps, TabsUIState> {
  state = {
    activeIndicatorRect: {
      verticalPos: 0,
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
    const { selectedTabRef, rtl, navRef } = this.props;

    if (selectedTabRef && selectedTabRef.current) {
      const newLeft = selectedTabRef.current.offsetLeft;
      const newWidth = selectedTabRef.current.offsetWidth;
      const verticalPos = rtl
        ? navRef.current.offsetWidth - (newLeft + newWidth)
        : newLeft;

      this.setState({
        activeIndicatorRect: { verticalPos, width: newWidth },
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
    const { items, onScroll, wrapperRef, navRef, rtl } = this.props;
    const positionName = rtl ? 'right' : 'left';
    const indicatorStyle = {
      [positionName]: activeIndicatorRect.verticalPos,
      width: activeIndicatorRect.width,
    };

    return (
      <div className={style.tabs} onScroll={onScroll} ref={wrapperRef}>
        <nav ref={navRef}>
          {items.map(this._getTabItem)}
          <div className={style.selectedIndicator} style={indicatorStyle} />
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
    const { onLeftNavClick, rtl } = this.props;

    const onNavKeyDownLeft = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const keyCode = e.keyCode;

      if (isSelectKey(keyCode)) {
        onLeftNavClick();
        return false;
      }
    };

    return this._getNavButton(
      rtl ? <ChevronRight /> : <ChevronLeft />,
      style.navBtnLeft,
      onLeftNavClick,
      onNavKeyDownLeft,
    );
  }

  _getRightNavButton() {
    const { onRightNavClick, rtl } = this.props;

    const onNavKeyDownRight = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const keyCode = e.keyCode;

      if (isSelectKey(keyCode)) {
        onRightNavClick();
        return false;
      }
    };

    return this._getNavButton(
      !rtl ? <ChevronRight /> : <ChevronLeft />,
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
