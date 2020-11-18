import * as React from 'react';
import classnames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { ReactComponent as ChevronLeft } from '../../assets/icons/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/ChevronRight.svg';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { TabItem } from './Tab';
import { ScrollableTabs } from './ScrollableTabs';
import { TabsNavButton } from './TabsNavButton';
import { ALIGNMENT, NavButtonOptions, SKIN, VARIANT } from './constants';
import { st, classes } from './Tabs.st.css';
import { TABS_DATA_HOOKS, TABS_DATA_KEYS } from './dataHooks';
import { TPAComponentProps } from '../../types';

const SCROLL_EPSILON = 15;

export interface TabsProps extends TPAComponentProps {
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
  'data-hook'?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

interface TabsState {
  navButtons?: NavButtonOptions;
  animateIndicator: boolean;
  selectedTab: number;
}

export class Tabs extends React.Component<TabsProps, TabsState> {
  private _tabsRef: ScrollableTabs;
  private _leftButtonRef: TabsNavButton;
  private _rightButtonRef: TabsNavButton;
  private _resizeTimer: NodeJS.Timeout;
  private _indicatorTimer: NodeJS.Timeout;

  static defaultProps = {
    skin: SKIN.fullUnderline,
    variant: VARIANT.fit,
    alignment: ALIGNMENT.center,
  };

  state = {
    navButtons: NavButtonOptions.none,
    animateIndicator: false,
    selectedTab: this.props.activeTabIndex,
  };

  static getDerivedStateFromProps(props, state) {
    let newState = null;

    if (state.selectedTab !== props.activeTabIndex) {
      newState = {
        navButtons: state.navButtons,
        animateIndicator: true,
      };
    }

    return newState;
  }

  componentDidMount() {
    this._updateButtonsIfNeeded();
  }

  componentDidUpdate() {
    const { selectedTab } = this.state;
    const { activeTabIndex } = this.props;

    clearTimeout(this._indicatorTimer);

    if (selectedTab !== activeTabIndex) {
      this.setState(
        { selectedTab: activeTabIndex, animateIndicator: true },
        () => {
          this._indicatorTimer = setTimeout(() => {
            this.setState({
              animateIndicator: false,
            });
          }, 350);
        },
      );
    }

    this._updateButtonsIfNeeded();
  }

  componentWillUnmount(): void {
    clearTimeout(this._resizeTimer);
    clearTimeout(this._indicatorTimer);
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

  _getNewNavButtons() {
    const scrollPosition = this._tabsRef.getNavScrollPosition();
    let newNavButtons = NavButtonOptions.none;

    if (scrollPosition.scrollLeft >= SCROLL_EPSILON) {
      newNavButtons = NavButtonOptions.left;
    }

    if (scrollPosition.scrollRight >= SCROLL_EPSILON) {
      newNavButtons =
        newNavButtons === NavButtonOptions.none
          ? NavButtonOptions.right
          : NavButtonOptions.both;
    }

    return newNavButtons;
  }

  _updateButtonsIfNeeded = () => {
    const { navButtons } = this.state;
    const newNavButtons = this._getNewNavButtons();

    if (newNavButtons !== navButtons) {
      this.setState({ navButtons: newNavButtons });
    }
  };

  _onResize = () => {
    clearTimeout(this._resizeTimer);

    this._updateButtonsIfNeeded();

    this._resizeTimer = setTimeout(() => {
      this._tabsRef.updateIndicatorPosition();
    }, 100);
  };

  _tabsRefCallback = (el: ScrollableTabs) => {
    this._tabsRef = el;
  };

  _leftButtonRefCallback = (el: TabsNavButton) => {
    this._leftButtonRef = el;
  };

  _rightButtonRefCallback = (el: TabsNavButton) => {
    this._rightButtonRef = el;
  };

  _getDataAttributes(mobile, rtl) {
    const { navButtons } = this.state;
    const { skin } = this.props;

    return {
      [TABS_DATA_KEYS.skin]: skin,
      [TABS_DATA_KEYS.mobile]: mobile,
      [TABS_DATA_KEYS.rtl]: rtl,
      [TABS_DATA_KEYS.navButtons]: navButtons,
    };
  }

  render() {
    const { navButtons, animateIndicator, selectedTab } = this.state;
    const {
      items,
      alignment,
      skin,
      variant,
      className,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
    } = this.props;
    const leftButtonWidth = this._leftButtonRef
      ? this._leftButtonRef.width()
      : 0;
    const rightButtonWidth = this._rightButtonRef
      ? this._rightButtonRef.width()
      : 0;

    return (
      <TPAComponentsConsumer>
        {({ mobile, rtl }) => (
          <div
            className={st(
              classes.root,
              { skin, navButtons, mobile },
              className,
            )}
            {...this._getDataAttributes(mobile, rtl)}
            data-hook={this.props['data-hook']}
          >
            <ReactResizeDetector handleWidth onResize={this._onResize} />
            <ScrollableTabs
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              alignment={alignment}
              variant={variant}
              items={items}
              className={classes.navigation}
              onClickItem={this._onClickItem}
              onScroll={this._updateButtonsIfNeeded}
              activeTabIndex={selectedTab}
              animateIndicator={animateIndicator}
              ref={this._tabsRefCallback}
              rtl={rtl}
              scrollButtons={{
                left: leftButtonWidth,
                right: rightButtonWidth,
              }}
            />
            <TabsNavButton
              onClick={this._onClickLeft}
              className={classnames(classes.navBtn, classes.navBtnLeft)}
              tabIndex={NavButtonOptions.right ? -1 : 0}
              data-hook={TABS_DATA_HOOKS.leftNavButton}
              ref={this._rightButtonRefCallback}
            >
              <ChevronLeft />
            </TabsNavButton>
            <TabsNavButton
              onClick={this._onClickRight}
              className={classnames(classes.navBtn, classes.navBtnRight)}
              tabIndex={NavButtonOptions.left ? -1 : 0}
              data-hook={TABS_DATA_HOOKS.rightNavButton}
              ref={this._leftButtonRefCallback}
            >
              <ChevronRight />
            </TabsNavButton>
            <div className={classes.border} />
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
