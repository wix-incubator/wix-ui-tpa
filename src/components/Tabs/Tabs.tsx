import * as React from 'react';
import classnames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { ChevronLeft, ChevronRight } from 'wix-ui-icons-common';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { TabItem } from './Tab/Tab';
import { ScrollableTabs } from './ScrollableTabs/ScrollableTabs';
import { TabsNavButton } from './TabsNavButton/TabsNavButton';
import { ALIGNMENT, SKIN, VARIANT } from './constants';
import style from './Tabs.st.css';

const enum NavButtonOptions {
  both = 'both',
  left = 'left',
  right = 'right',
  none = 'none',
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

export class Tabs extends React.Component<TabsProps, TabsState> {
  private _tabsRef: ScrollableTabs;
  private _resizeTimer: number;

  static defaultProps = {
    skin: SKIN.fullUnderline,
    variant: VARIANT.fit,
    alignment: ALIGNMENT.center,
  };

  state = {
    navButtons: NavButtonOptions.none,
    tabsKey: this._generateRandomKey(),
  };

  componentDidMount() {
    this._updateButtonsIfNeeded();
  }

  componentDidUpdate() {
    this._updateButtonsIfNeeded();
  }

  _onClickLeft = () => {
    this._tabsRef.scrollLeft();
  };

  _onClickRight = () => {
    this._tabsRef.scrollRight();
  };

  _onClickItem = (index: number) => {
    const { activeTabIndex, onTabClick } = this.props;

    if (index !== activeTabIndex) {
      onTabClick(index);
    }
  };

  _onScroll = (event: React.UIEvent) => {
    const { navButtons } = this.state;
    const target = event.target as HTMLDivElement;
    const navigationWidth = target.clientWidth;
    const navigationScrollWidth = target.scrollWidth;
    const scrollLeft = target.scrollLeft;
    const newNavButtons = this._getNewNavButtons(
      navigationWidth,
      navigationScrollWidth,
      scrollLeft,
    );

    if (newNavButtons !== navButtons) {
      this.setState({ navButtons: newNavButtons });
    }
  };

  _getNewNavButtons(
    navigationWidth: number,
    navigationScrollWidth: number,
    scrollLeft: number,
  ) {
    let newNavButtons = NavButtonOptions.none;

    if (scrollLeft > 0) {
      newNavButtons = NavButtonOptions.left;
    }

    if (scrollLeft + navigationWidth < navigationScrollWidth) {
      newNavButtons =
        newNavButtons === NavButtonOptions.none
          ? NavButtonOptions.right
          : NavButtonOptions.both;
    }

    return newNavButtons;
  }

  _updateButtonsIfNeeded() {
    const { navButtons } = this.state;
    const navElement = this._tabsRef.getNavElement();

    if (navElement) {
      const navigationWidth = navElement.clientWidth;
      const navigationScrollWidth = navElement.scrollWidth;
      const scrollLeft = navElement.scrollLeft;

      const newNavButtons = this._getNewNavButtons(
        navigationWidth,
        navigationScrollWidth,
        scrollLeft,
      );

      if (newNavButtons !== navButtons) {
        this.setState({ navButtons: newNavButtons });
      }
    }
  }

  _onResize = () => {
    clearTimeout(this._resizeTimer);

    this._updateButtonsIfNeeded();

    this._resizeTimer = window.setTimeout(() => {
      this.setState({ tabsKey: this._generateRandomKey() });
    }, 100);
  };

  _generateRandomKey() {
    return `${Math.random()}`;
  }

  _tabsRefCallback = (el: ScrollableTabs) => {
    this._tabsRef = el;
  };

  render() {
    const { navButtons, tabsKey } = this.state;
    const { items, alignment, skin, variant, activeTabIndex } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...style('root', { skin, navButtons, mobile }, this.props)}>
            <ReactResizeDetector handleWidth onResize={this._onResize} />
            <ScrollableTabs
              alignment={alignment}
              variant={variant}
              items={items}
              className={style.navigation}
              onClickItem={this._onClickItem}
              onScroll={this._onScroll}
              activeTabIndex={activeTabIndex}
              ref={this._tabsRefCallback}
              key={tabsKey}
            />
            <TabsNavButton
              onClick={this._onClickLeft}
              className={classnames(style.navBtn, style.navBtnLeft)}
            >
              <ChevronLeft size="35" />
            </TabsNavButton>
            <TabsNavButton
              onClick={this._onClickRight}
              className={classnames(style.navBtn, style.navBtnRight)}
            >
              <ChevronRight size="35" />
            </TabsNavButton>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
