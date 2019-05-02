import * as React from 'react';
import classNames from 'classnames';
import { ChevronLeft, ChevronRight } from 'wix-ui-icons-common';
import { ALIGNMENT, SKIN, VARIANT } from './constants';
import { Tab } from './Tab';
import style from './Tabs.st.css';
import { isSelectKey } from './Tabs';

export interface TabItem {
  /** Title of the tab */
  title?: string;
}

interface TabsUIProps {
  /** tabs to be displayed */
  items: TabItem[];
  /** callback function when tab is selected , returning the selected item index */
  onTabClick?(index: number): void;
  /** index of the selected tab item */
  activeTabIndex?: number;
  onScroll(event: React.SyntheticEvent<HTMLDivElement>): void;
  onLeftNavClick(): void;
  onRightNavClick(): void;
  wrapperRef: any; 
}

class TabsUI extends React.PureComponent<TabsUIProps> {
  _getNavigationItems() {
    const { items, activeTabIndex, onTabClick, onScroll } = this.props;

    return (
      <div className={style.tabs} onScroll={onScroll}>
        <nav>
          {items.map((item, index) => (
            <Tab
              title={item.title}
              index={index}
              isActive={activeTabIndex === index}
              onClick={onTabClick}
            />
          ))}
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
    const { wrapperRef } = this.props;
    
    return (
      <div className={style.content} ref={wrapperRef}>
        {this._getLeftNavButton()}
        {this._getNavigationItems()}
        {this._getRightNavButton()}
      </div>
    );
  }
}

export { TabsUI };
