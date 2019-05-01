import * as React from 'react';
import classNames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { ChevronLeft, ChevronRight } from 'wix-ui-icons-common';
import { ALIGNMENT, SKIN, VARIANT } from './constants';
import { animate } from '../../common/animations';
import { isOperationKey } from '../../common/utils';
import style from './Tabs.st.css';

export interface TabsProps {
  /** tabs to be displayed */
  items: TabItem[];
  /** callback function when tab is selected , returning the selected TabItem */
  onTabClick?: Function;
  /** index of the selected tab item */
  activeTabIndex?: number;
  /** control whether to display border under tabs*/
  skin?: SKIN;
  /** control where to align the tabs */
  alignment?: ALIGNMENT;
  /** control whether to set tabs on all content width*/
  variant?: VARIANT;
}

export interface TabItem {
  /** Title of the tab */
  title?: string;
}

const enum NavButtonOptions {
  both = 'both',
  left = 'left',
  right = 'right',
  none = 'none',
}

interface TabsState {
  scrollable: boolean;
  navButtons?: NavButtonOptions;
}

class Tabs extends React.PureComponent<TabsProps> {
  private readonly _wrapperRef: React.RefObject<HTMLDivElement>;
  private _tabsEl: HTMLDivElement;

  state: TabsState = {
    scrollable: false,
    navButtons: NavButtonOptions.none,
  };

  static defaultProps = {
    activeTabIndex: 0,
    onTabClick: (tabIndex: number) => {},
    skin: SKIN.fullUnderline,
    alignment: ALIGNMENT.center,
    variant: VARIANT.fit,
  };

  constructor(props: Readonly<TabsProps>) {
    super(props);

    this._wrapperRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    this._setScrollableIfNeeded();
  }

  componentDidUpdate(prevProps: TabsProps) {
    if (
      prevProps.items !== this.props.items ||
      prevProps.alignment !== this.props.alignment ||
      prevProps.skin !== this.props.skin ||
      prevProps.variant !== this.props.variant
    ) {
      this._setScrollableIfNeeded();
    } else if (prevProps.activeTabIndex !== this.props.activeTabIndex) {
      this._scrollToViewIfNeeded();
    }
  }

  _onResize = () => {
    this._setScrollableIfNeeded();
  };

  _calculateNavigationWidth = () => {
    let width = 0;

    this._wrapperRef.current.querySelectorAll(`.${style.tab}`).forEach(tab => {
      width += tab.clientWidth;
    });

    return width;
  };

  _shouldShowScroll() {
    let shouldShowScroll = false;

    if (this._wrapperRef.current) {
      const navWidth = this._calculateNavigationWidth();
      const wrapperWidth = this._wrapperRef.current.offsetWidth;
      shouldShowScroll = navWidth > wrapperWidth;
    }

    return shouldShowScroll;
  }

  _scrollToViewIfNeeded() {
    const { activeTabIndex } = this.props;
    const currentTabElement = this._wrapperRef.current.querySelector(
      `[data-index="${activeTabIndex}"]`,
    ) as HTMLElement;
    const tabsElement = this._getTabsElement();
    const leftLimit = tabsElement.scrollLeft;
    const rightLimit = leftLimit + tabsElement.clientWidth;
    const leftDelta = currentTabElement.offsetLeft - leftLimit;
    const rightDelta =
      currentTabElement.offsetLeft + currentTabElement.clientWidth - rightLimit;
    let scroll = 0;

    if (leftDelta < 0) {
      scroll = -1;
    } else if (rightDelta > 0) {
      scroll = 1;
    }

    this._scrollTabs(scroll);
  }

  _setScrollableIfNeeded = () => {
    const { scrollable, navButtons } = this.state;
    const shouldShowScroll = this._shouldShowScroll();
    const newShowNavButtons = this._showNavButtons();
    const newState = {} as TabsState;

    if (shouldShowScroll !== scrollable) {
      newState.scrollable = shouldShowScroll;
    }

    if (newShowNavButtons !== navButtons) {
      newState.navButtons = newShowNavButtons;
    }

    this.setState(newState);
  };

  _showNavButtons = () => {
    const {
      scrollWidth,
      clientWidth,
      scrollLeft,
    } = this._wrapperRef.current.querySelector(`.${style.tabs}`);
    let shouldShow = NavButtonOptions.none;

    if (scrollLeft > 0) {
      shouldShow = NavButtonOptions.left;
    }

    if (scrollWidth > clientWidth + scrollLeft) {
      shouldShow =
        shouldShow === NavButtonOptions.none
          ? NavButtonOptions.right
          : NavButtonOptions.both;
    }

    return shouldShow;
  };

  _onScroll = (e: React.SyntheticEvent) => {
    const { navButtons } = this.state;
    const newShowNavButtons = this._showNavButtons();

    if (newShowNavButtons !== navButtons) {
      this.setState({ navButtons: newShowNavButtons });
    }
  };

  _scrollTabs(direction: number) {
    const tabsElement = this._getTabsElement();
    const clientWidth = direction * tabsElement.clientWidth;
    const nextScrollLeft = tabsElement.scrollLeft + clientWidth;
    animate('scrollLeft', tabsElement, nextScrollLeft);
  }

  _getTabsElement() {
    if (!this._tabsEl) {
      this._tabsEl =
        this._wrapperRef.current &&
        this._wrapperRef.current.querySelector(`.${style.tabs}`);
    }

    return this._tabsEl;
  }

  _onNavClickLeft = () => {
    this._scrollTabs(-1);
  };

  _onNavClickRight = () => {
    this._scrollTabs(1);
  };

  _onNavKeyDownLeft = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyCode = e.keyCode;

    if (isOperationKey(keyCode)) {
      this._onNavClickLeft();
      return false;
    }
  };

  _onNavKeyDownRight = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyCode = e.keyCode;

    if (isOperationKey(keyCode)) {
      this._onNavClickRight();
      return false;
    }
  };

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
    return this._getNavButton(
      <ChevronLeft />,
      style.navBtnLeft,
      this._onNavClickLeft,
      this._onNavKeyDownLeft,
    );
  }

  _getRightNavButton() {
    return this._getNavButton(
      <ChevronRight />,
      style.navBtnRight,
      this._onNavClickRight,
      this._onNavKeyDownRight,
    );
  }

  _selectTab = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const { activeTabIndex, onTabClick } = this.props;
    const newActiveTabIndex = +(e.target as HTMLDivElement).getAttribute(
      'data-index',
    );

    if (activeTabIndex !== newActiveTabIndex) {
      onTabClick(newActiveTabIndex);
    }
  };

  _onTabKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyCode = e.keyCode;

    if (isOperationKey(keyCode)) {
      this._selectTab(e as React.SyntheticEvent<HTMLDivElement>);
      return false;
    }
  };

  _renderTabItem = (item: TabItem, index: number) => {
    const { activeTabIndex } = this.props;

    return (
      <div
        data-hook={`tab-item-${index}`}
        data-index={index}
        key={`tab-item-${index}`}
        onClick={this._selectTab}
        onKeyDown={this._onTabKeyDown}
        className={classNames(style.tab, {
          [style.activeTab]: activeTabIndex === index,
        })}
        tabIndex={0}
      >
        {item.title}
      </div>
    );
  };

  _getNavigationItems() {
    const { items } = this.props;

    return (
      <div className={style.tabs} onScroll={this._onScroll}>
        <nav>{items.map(this._renderTabItem)}</nav>
      </div>
    );
  }

  render() {
    const { skin, alignment, variant } = this.props;
    const { scrollable, navButtons } = this.state;
    const styleProps = { skin, alignment, variant, scrollable, navButtons };

    return (
      <div {...style('root', styleProps, this.props)}>
        <ReactResizeDetector handleWidth onResize={this._onResize} />
        <div className={style.content} ref={this._wrapperRef}>
          {this._getLeftNavButton()}
          {this._getNavigationItems()}
          {this._getRightNavButton()}
        </div>
      </div>
    );
  }
}

export { Tabs };
