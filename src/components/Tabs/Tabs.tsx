import * as React from 'react';
import classNames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { ChevronLeft, ChevronRight } from 'wix-ui-icons-common';
import { ALIGNMENT, SKIN, VARIANT } from './constants';
import { KEY_CODES } from '../../common/constants';
import { animate } from '../../common/animations';
import { Tab } from './Tab';
import { TabsUI } from './TabsUI';
import style from './Tabs.st.css';

export interface TabItem {
  /** Title of the tab */
  title?: string;
}

export interface TabsProps {
  /** tabs to be displayed */
  items: TabItem[];
  /** callback function when tab is selected , returning the selected item index */
  onTabClick?(index: number): void;
  /** index of the selected tab item */
  activeTabIndex?: number;
  /** control whether to display border under tabs*/
  skin?: SKIN;
  /** control where to align the tabs */
  alignment?: ALIGNMENT;
  /** control whether to set tabs on all content width*/
  variant?: VARIANT;
}

interface TabsState {
  scrollable: boolean;
  navButtons?: NavButtonOptions;
}

const enum NavButtonOptions {
  both = 'both',
  left = 'left',
  right = 'right',
  none = 'none',
}

export function isSelectKey(keyCode: number) {
  switch (keyCode) {
    case KEY_CODES.ENTER:
    case KEY_CODES.SPACEBAR:
      return true;
    default:
      return false;
  }
}

class Tabs extends React.PureComponent<TabsProps, TabsState> {
  private readonly _wrapperRef: React.RefObject<HTMLDivElement>;
  private _tabsEl: HTMLDivElement;

  state: TabsState = {
    scrollable: false,
    navButtons: NavButtonOptions.none,
  };

  static defaultProps = {
    activeTabIndex: 0,
    onTabClick: (tabIndex: number) => tabIndex,
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

  _selectTab = (index: number) => {
    const { activeTabIndex, onTabClick } = this.props;

    if (activeTabIndex !== index) {
      onTabClick(index);
    }
  };

  render() {
    const { items, activeTabIndex, skin, alignment, variant } = this.props;
    const { scrollable, navButtons } = this.state;
    const styleProps = { skin, alignment, variant, scrollable, navButtons };

    return (
      <div {...style('root', styleProps, this.props)}>
        <ReactResizeDetector handleWidth onResize={this._onResize} />
        <TabsUI
          wrapperRef={this._wrapperRef}
          items={items}
          onTabClick={this._selectTab}
          activeTabIndex={activeTabIndex}
          onScroll={this._onScroll}
          onLeftNavClick={this._onNavClickLeft}
          onRightNavClick={this._onNavClickRight}
        />
      </div>
    );
  }
}

export { Tabs };
