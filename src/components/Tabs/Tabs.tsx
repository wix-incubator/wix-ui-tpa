import * as React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import style from './Tabs.st.css';
import classNames from 'classnames';
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

interface TabsState {
  scrollable: boolean;
}

const EPSILON = 6;

const selectTab = (newActiveTabIndex, activeTabIndex, onTabClick) => {
  if (activeTabIndex !== newActiveTabIndex) {
    onTabClick(newActiveTabIndex);
  }
};

const renderTabItem = ({ item, index, onTabClick, activeTabIndex }) => {
  return (
    <div
      data-hook={`tab-item-${index}`}
      key={`tab-item-${index}`}
      onClick={() => selectTab(index, activeTabIndex, onTabClick)}
      className={classNames(style.tab, {
        [style.activeTab]: activeTabIndex === index,
      })}
    >
      {item.title}
    </div>
  );
};

class Tabs extends React.PureComponent<TabsProps> {
  _nav: HTMLElement;
  _wrapper: HTMLElement;

  state: TabsState = {
    scrollable: false,
  };

  static defaultProps = {
    onTabClick: (tabIndex: number) => {},
    skin: SKIN.fullUnderline,
    alignment: ALIGNMENT.center,
    variant: VARIANT.fit,
  };

  constructor(props: Readonly<TabsProps>) {
    super(props);
  }

  _wrapperRef = (el: HTMLElement) => {
    this._wrapper = el;
    this._setScrollableIfNeeded();
  };

  _onResize = () => {
    this._setScrollableIfNeeded();
  };

  _calculateNavigationWidth = () => {
    let width = 0;

    this._wrapper.querySelectorAll(`.${style.tab}`).forEach(tab => {
      width += tab.clientWidth;
    });

    return width;
  };

  _shouldShowScroll() {
    let shouldShowScroll = false;

    if (this._wrapper) {
      const navWidth = this._calculateNavigationWidth();
      const wrapperWidth = this._wrapper.offsetWidth;
      console.log(
        'adler',
        'Tabs.tsx:98',
        this._wrapper.querySelector('nav').scrollLeft,
      );
      shouldShowScroll = navWidth > wrapperWidth;
    }

    return shouldShowScroll;
  }

  _setScrollableIfNeeded = () => {
    const { scrollable } = this.state;
    const shouldShowScroll = this._shouldShowScroll();

    if (shouldShowScroll !== scrollable) {
      this.setState({ scrollable: shouldShowScroll });
    }
  };

  _onScroll = (e: React.SyntheticEvent) => {
    console.log(e);
  };

  render() {
    const {
      items,
      activeTabIndex,
      onTabClick,
      skin,
      alignment,
      variant,
    } = this.props;
    const { scrollable } = this.state;

    return (
      <div
        {...style('root', { skin, alignment, variant, scrollable }, this.props)}
      >
        <ReactResizeDetector handleWidth onResize={this._onResize} />
        <div
          className={style.navWrapper}
          ref={this._wrapperRef}
          onScroll={this._onScroll}
        >
          <div className={classNames(style.scrollBtn, style.scrollBtnLeft)}>
            &lt;
          </div>
          <nav>
            {items.map((item, index) =>
              renderTabItem({ item, index, onTabClick, activeTabIndex }),
            )}
          </nav>
          <div className={classNames(style.scrollBtn, style.scrollBtnRight)}>
            &gt;
          </div>
        </div>
      </div>
    );
  }
}

export { Tabs };
