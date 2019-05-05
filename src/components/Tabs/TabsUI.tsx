import * as React from 'react';
import classNames from 'classnames';
import { ChevronLeft, ChevronRight } from 'wix-ui-icons-common';
import { Tab } from './Tab';
import style from './Tabs.st.css';
import { isSelectKey } from './Tabs';

export interface TabItem {
  /** Title of the tab */
  title?: string;
}

interface TabsUIProps {
  items: TabItem[];
  onTabClick?(index: number): void;
  activeTabIndex?: number;
  onScroll(event: React.SyntheticEvent<HTMLDivElement>): void;
  onLeftNavClick(): void;
  onRightNavClick(): void;
  wrapperRef: React.RefObject<HTMLDivElement>;
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
    setTimeout(this._updateSelectedTabPosition, 100);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeTabIndex !== this.props.activeTabIndex) {
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

  _getNavigationItems() {
    const { activeIndicatorRect } = this.state;
    const {
      items,
      activeTabIndex,
      onTabClick,
      onScroll,
      wrapperRef,
      navRef,
      selectedTabRef,
    } = this.props;

    return (
      <div className={style.tabs} onScroll={onScroll} ref={wrapperRef}>
        <nav ref={navRef}>
          {items.map((item, index) => (
            <Tab
              title={item.title}
              index={index}
              isActive={activeTabIndex === index}
              onClick={onTabClick}
              tabRef={activeTabIndex === index ? selectedTabRef : null}
            />
          ))}
        </nav>
        <div className={style.selectedIndicator} style={activeIndicatorRect} />
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
