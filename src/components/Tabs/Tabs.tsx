import * as React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { ALIGNMENT, SKIN, VARIANT } from './constants';
import { animate } from '../../common/animations';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { TabsUI } from './TabsUI';
import style from './Tabs.st.css';

const isEqual = require('lodash/isEqual');

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
  navButtons?: NavButtonOptions;
  tabsKey: string;
}

const enum NavButtonOptions {
  both = 'both',
  left = 'left',
  right = 'right',
  none = 'none',
}

class Tabs extends React.Component<TabsProps, TabsState> {
  private readonly _navRef: React.RefObject<HTMLElement>;
  private readonly _selectedTabRef: React.RefObject<HTMLDivElement>;
  private _resizeTimer: number;

  state: TabsState = {
    navButtons: NavButtonOptions.none,
    tabsKey: this._generateRandomKey(),
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

    this._navRef = React.createRef<HTMLElement>();
    this._selectedTabRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    this._showNavButtonsIfNeeded();
  }

  componentDidUpdate(prevProps: TabsProps) {
    if (
      !isEqual(prevProps.items, this.props.items) ||
      prevProps.alignment !== this.props.alignment ||
      prevProps.skin !== this.props.skin ||
      prevProps.variant !== this.props.variant
    ) {
      this._showNavButtonsIfNeeded();
    } else if (prevProps.activeTabIndex !== this.props.activeTabIndex) {
      this._scrollToViewIfNeeded();
    }
  }

  _generateRandomKey() {
    return `${Math.random()}`;
  }

  _onResize = () => {
    clearTimeout(this._resizeTimer);
    this._showNavButtonsIfNeeded();

    this._resizeTimer = window.setTimeout(() => {
      this.setState({ tabsKey: this._generateRandomKey() });
    }, 100);
  };

  _scrollToViewIfNeeded = () => {
    const currentTabElement = this._selectedTabRef.current;
    const tabsElement = this._navRef.current;
    const leftLimit = tabsElement.scrollLeft;
    const rightLimit = leftLimit + tabsElement.clientWidth;
    const leftDelta = currentTabElement.offsetLeft - leftLimit;
    const rightDelta =
      currentTabElement.offsetLeft + currentTabElement.clientWidth - rightLimit;

    if (leftDelta < 0 || rightDelta > 0) {
      this._animateScroll(currentTabElement.offsetLeft);
    }
  };

  _showNavButtonsIfNeeded = () => {
    const { navButtons } = this.state;
    const newShowNavButtons = this._shouldShowNavButtons();

    if (newShowNavButtons !== navButtons) {
      this.setState({ navButtons: newShowNavButtons });
    }
  };

  _shouldShowNavButtons = () => {
    const { scrollWidth, clientWidth, scrollLeft } = this._navRef.current;
    let shouldShow = NavButtonOptions.none;

    if (Math.abs(scrollLeft) > 0) {
      shouldShow = NavButtonOptions.left;
    }

    if (scrollWidth > clientWidth + Math.abs(scrollLeft)) {
      shouldShow =
        shouldShow === NavButtonOptions.none
          ? NavButtonOptions.right
          : NavButtonOptions.both;
    }

    return shouldShow;
  };

  _onScroll = () => {
    this._showNavButtonsIfNeeded();
  };

  _scrollTabs(direction: number) {
    const tabsElement = this._navRef.current;
    const clientWidth = direction * tabsElement.clientWidth;
    const nextScrollLeft = tabsElement.scrollLeft + clientWidth;
    this._animateScroll(nextScrollLeft);
  }

  _animateScroll(scrollLeft: number) {
    animate('scrollLeft', this._navRef.current, scrollLeft);
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
    // const { mobile } = this.context;
    const { navButtons, tabsKey } = this.state;
    const { items, activeTabIndex, skin, alignment, variant } = this.props;
    const styleProps = { skin, alignment, variant, navButtons };

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...style('root', { ...styleProps, mobile }, this.props)}>
            <ReactResizeDetector handleWidth onResize={this._onResize} />
            <TabsUI
              key={tabsKey}
              navRef={this._navRef}
              selectedTabRef={this._selectedTabRef}
              items={items}
              onTabClick={this._selectTab}
              activeTabIndex={activeTabIndex}
              alignment={alignment}
              variant={variant}
              onScroll={this._onScroll}
              onLeftNavClick={this._onNavClickLeft}
              onRightNavClick={this._onNavClickRight}
            />
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}

export { Tabs };
