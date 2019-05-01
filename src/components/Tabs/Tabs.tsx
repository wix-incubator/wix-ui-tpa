import * as React from 'react';
import classNames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { ChevronLeft, ChevronRight } from 'wix-ui-icons-common';
import style from './Tabs.st.css';
import { ALIGNMENT, SKIN, VARIANT } from './constants';
import { TPAComponentsConsumer, TPAComponentsContext } from '../TPAComponentsConfig';

export interface TabsProps {
  /** tabs to be displayed */
  items: TabItem[];
  /** callback function when tab is selected , returning the selected TabItem */
  onTabClick?: Function;
  /** index of the selected tab item */
  activeTabIndex: number;
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

  state: TabsState = {
    scrollable: false,
    navButtons: NavButtonOptions.none,
  };

  static defaultProps = {
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

  componentDidUpdate() {
    this._setScrollableIfNeeded();
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

  _getNavButton(icon: React.ReactElement, className: string) {
    return (
      <div className={classNames(style.navBtn, className)}>
        {React.cloneElement(icon, { size: 35 })}
      </div>
    );
  }

  _getLeftNavButton() {
    return this._getNavButton(<ChevronLeft />, style.navBtnLeft);
  }

  _getRightNavButton() {
    return this._getNavButton(<ChevronRight />, style.navBtnRight);
  }

  _selectTab = (e: React.SyntheticEvent) => {
    const { activeTabIndex, onTabClick } = this.props;
    const newActiveTabIndex = e.target.getAttribute('data-index');

    if (activeTabIndex !== newActiveTabIndex) {
      onTabClick(newActiveTabIndex);
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
        className={classNames(style.tab, {
          [style.activeTab]: activeTabIndex === index,
        })}
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
