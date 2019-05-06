import * as React from 'react';
import isEqual from 'lodash/isEqual';
import ReactResizeDetector from 'react-resize-detector';
import { ALIGNMENT, SKIN, VARIANT } from './constants';
import { animate } from '../../common/animations';
import {
  TPAComponentsContext,
  TPAComponentsConfig,
} from '../TPAComponentsConfig';
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
  navButtons?: NavButtonOptions;
}

const enum NavButtonOptions {
  both = 'both',
  left = 'left',
  right = 'right',
  none = 'none',
}

class Tabs extends React.Component<TabsProps, TabsState> {
  private readonly _wrapperRef: React.RefObject<HTMLDivElement>;
  private readonly _navRef: React.RefObject<HTMLElement>;
  private readonly _selectedTabRef: React.RefObject<HTMLDivElement>;

  static contextType = TPAComponentsContext;
  context!: React.ContextType<typeof TPAComponentsContext>;

  state: TabsState = {
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
    this._navRef = React.createRef<HTMLElement>();
    this._selectedTabRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    // wrapped in setTimeout in order to let width calculations to be up to date
    setTimeout(this._showNavButtonsIfNeeded, 100);
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

  _onResize = () => {
    this._showNavButtonsIfNeeded();
  };

  _scrollToViewIfNeeded = () => {
    const currentTabElement = this._selectedTabRef.current;
    const tabsElement = this._wrapperRef.current;
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
    const { rtl } = this.context;
    const { scrollWidth, clientWidth, scrollLeft } = this._wrapperRef.current;
    const leftButton = rtl ? NavButtonOptions.right : NavButtonOptions.left;
    const rightButton = rtl ? NavButtonOptions.left : NavButtonOptions.right;
    let shouldShow = NavButtonOptions.none;

    if (Math.abs(scrollLeft) > 0) {
      shouldShow = leftButton;
    }

    if (scrollWidth > clientWidth + Math.abs(scrollLeft)) {
      shouldShow =
        shouldShow === NavButtonOptions.none
          ? rightButton
          : NavButtonOptions.both;
    }

    return shouldShow;
  };

  _onScroll = () => {
    this._showNavButtonsIfNeeded();
  };

  _scrollTabs(direction: number) {
    const { rtl } = this.context;
    const tabsElement = this._wrapperRef.current;
    const clientWidth = direction * tabsElement.clientWidth;
    const nextScrollLeft = tabsElement.scrollLeft + clientWidth;
    this._animateScroll((rtl ? -1 : 1) * nextScrollLeft);
  }

  _animateScroll(scrollLeft: number) {
    animate('scrollLeft', this._wrapperRef.current, scrollLeft);
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
    const { mobile, rtl } = this.context;
    const { items, activeTabIndex, skin, alignment, variant } = this.props;
    const { navButtons } = this.state;
    const styleProps = { skin, alignment, variant, navButtons };

    return (
      <div {...style('root', { ...styleProps, mobile, rtl }, this.props)}>
        <ReactResizeDetector handleWidth onResize={this._onResize} />
        <TabsUI
          wrapperRef={this._wrapperRef}
          navRef={this._navRef}
          selectedTabRef={this._selectedTabRef}
          items={items}
          onTabClick={this._selectTab}
          activeTabIndex={activeTabIndex}
          alignment={alignment}
          variant={variant}
          onScroll={this._onScroll}
          rtl={rtl}
          onLeftNavClick={this._onNavClickLeft}
          onRightNavClick={this._onNavClickRight}
        />
      </div>
    );
  }
}

export { Tabs };
