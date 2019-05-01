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

const enum ScrollBtnOptions {
  both = 'both',
  left = 'left',
  right = 'right',
  none = 'none',
}

interface TabsState {
  scrollable: boolean;
  scrollButtons?: ScrollBtnOptions;
}

class Tabs extends React.PureComponent<TabsProps> {
  private readonly _wrapperRef: React.RefObject<HTMLDivElement>;

  state: TabsState = {
    scrollable: false,
    scrollButtons: ScrollBtnOptions.none,
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
    const { scrollable, scrollButtons } = this.state;
    const shouldShowScroll = this._shouldShowScroll();
    const newShowScrollButtons = this._showScrollButtons();
    const newState = {} as TabsState;

    if (shouldShowScroll !== scrollable) {
      newState.scrollable = shouldShowScroll;
    }

    if (newShowScrollButtons !== scrollButtons) {
      newState.scrollButtons = newShowScrollButtons;
    }

    this.setState(newState);
  };

  _showScrollButtons = () => {
    const {
      scrollWidth,
      clientWidth,
      scrollLeft,
    } = this._wrapperRef.current.querySelector(`.${style.tabs}`);
    let shouldShow = ScrollBtnOptions.none;

    if (scrollLeft > 0) {
      shouldShow = ScrollBtnOptions.left;
    }

    if (scrollWidth > clientWidth + scrollLeft) {
      shouldShow =
        shouldShow === ScrollBtnOptions.none
          ? ScrollBtnOptions.right
          : ScrollBtnOptions.both;
    }

    return shouldShow;
  };

  _onScroll = (e: React.SyntheticEvent) => {
    const { scrollButtons } = this.state;
    const newShowScrollButtons = this._showScrollButtons();

    if (newShowScrollButtons !== scrollButtons) {
      this.setState({ scrollButtons: newShowScrollButtons });
    }
  };

  _getNavButton(icon: React.ReactElement, className: string) {
    return (
      <div className={classNames(style.scrollBtn, className)}>
        {React.cloneElement(icon, { size: 35 })}
      </div>
    );
  }

  _getLeftNavButton() {
    return this._getNavButton(<ChevronLeft />, style.scrollBtnLeft);
  }

  _getRightNavButton() {
    return this._getNavButton(<ChevronRight />, style.scrollBtnRight);
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
    const { scrollable, scrollButtons } = this.state;
    const styleProps = { skin, alignment, variant, scrollable, scrollButtons };

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
