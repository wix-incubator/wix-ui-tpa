import * as React from 'react';
// @ts-ignore
import * as isEqual from 'lodash/isEqual';
import { Tab, TabItem } from '../Tab/Tab';
import { ALIGNMENT as Alignment, VARIANT as Variant } from '../../Tabs';
import { animateElementByProp } from '../../../common/animations';
import { TABS_DATA_HOOKS, TABS_DATA_KEYS } from '../dataHooks';
import { NavButtonOptions } from '../constants';
import { st, classes } from './ScrollableTabs.st.css';
import { TPAComponentProps } from '../../../types';

const SCROLL_EPSILON = 15;

interface TabsUIRect {
  left: number;
  width: number;
}

interface ScrollButtons {
  left: number;
  right: number;
}

interface ScrollableTabsProps extends TPAComponentProps {
  items: TabItem[];
  alignment: Alignment;
  variant: Variant;
  onScroll(event: React.UIEvent): void;
  onClickItem(index: number): void;
  activeTabIndex: number;
  animateIndicator?: boolean;
  scrollButtons: ScrollButtons;
  rtl: boolean;
}

interface ScrollableTabsState {
  selectedIndicatorRect: TabsUIRect;
}

export class ScrollableTabs extends React.Component<
  ScrollableTabsProps,
  ScrollableTabsState
> {
  _navRef: React.RefObject<HTMLElement>;
  _listRef: React.RefObject<HTMLUListElement>;
  _selectedTabRef: React.RefObject<HTMLLIElement>;
  private _cancelAnimation: () => void;

  static defaultProps = {
    scrollButtons: {
      left: 0,
      right: 0,
    },
  };

  state = {
    selectedIndicatorRect: {
      left: 0,
      width: 0,
    },
  };

  constructor(props) {
    super(props);

    this._navRef = React.createRef();
    this._listRef = React.createRef();
    this._selectedTabRef = React.createRef();
  }

  componentDidMount() {
    this._updateComponent();
  }

  componentDidUpdate(
    prevProps: ScrollableTabsProps,
    prevState: ScrollableTabsState,
  ) {
    if (
      prevProps.activeTabIndex !== this.props.activeTabIndex ||
      !isEqual(prevProps.items, this.props.items) ||
      prevProps.alignment !== this.props.alignment ||
      prevProps.variant !== this.props.variant ||
      prevProps.rtl !== this.props.rtl
    ) {
      this._updateComponent(
        prevProps.activeTabIndex !== this.props.activeTabIndex,
      );
    }
  }

  updateIndicatorPosition() {
    this._updateIndicatorPosition();
  }

  _updateComponent(newSelectedTab = false) {
    this._updateIndicatorPosition();
    this._scrollToViewIfNeeded(newSelectedTab);
  }

  _updateIndicatorPosition() {
    const { selectedIndicatorRect } = this.state;

    if (this._selectedTabRef && this._selectedTabRef.current) {
      const newLeft = this._selectedTabRef.current.offsetLeft;
      const newWidth = this._selectedTabRef.current.offsetWidth;

      if (
        selectedIndicatorRect.left !== newLeft ||
        selectedIndicatorRect.width !== newWidth
      ) {
        this.setState({
          selectedIndicatorRect: { left: newLeft, width: newWidth },
        });
      }
    }
  }

  _scrollToViewIfNeeded = (newSelectedTab: boolean) => {
    const { rtl, scrollButtons } = this.props;
    const { left, right } = scrollButtons;

    if (this._selectedTabRef && this._selectedTabRef.current && !rtl) {
      const currentTabElement = this._selectedTabRef.current;
      const navElement = this._navRef.current;
      const leftLimit = navElement.scrollLeft;
      const rightLimit = leftLimit + navElement.clientWidth;
      const leftDelta = currentTabElement.offsetLeft - leftLimit;
      const rightDelta =
        currentTabElement.offsetLeft +
        currentTabElement.clientWidth -
        rightLimit;
      const buttonGap = rtl ? right : left;
      const scrollAmount = currentTabElement.offsetLeft - buttonGap;

      if (newSelectedTab || leftDelta < 0 || rightDelta > 0) {
        this._animateScroll(scrollAmount);
      }
    }
  };

  _getMaxMinScroll() {
    const navElement = this._navRef.current;
    const isRTL = this.props.rtl;

    return {
      max: isRTL ? 0 : navElement.scrollWidth - navElement.offsetWidth,
      min: isRTL ? navElement.offsetWidth - navElement.scrollWidth : 0,
    };
  }

  _animateScroll(scrollLeft: number) {
    if (this._cancelAnimation) {
      this._cancelAnimation();
    }

    const { min, max } = this._getMaxMinScroll();
    const moveTo = Math.min(Math.max(scrollLeft, min), max);
    const { cancel, done } = animateElementByProp({
      propToAnimate: 'scrollLeft',
      element: this._navRef.current,
      moveTo,
      duration: 400,
    });

    this._cancelAnimation = cancel;

    done
      .then(() => {
        this._cancelAnimation = null;
      })
      .catch(() => {});
  }

  scrollLeft() {
    this._scrollToSide(-1);
  }

  scrollRight() {
    this._scrollToSide(1);
  }

  _scrollToSide(scrollDirection: number) {
    const scrollLeft = this._navRef.current.scrollLeft;
    const clientWidth = this._navRef.current.clientWidth;
    const scrollDistance = scrollDirection * (clientWidth / 2);

    this._animateScroll(scrollLeft + scrollDistance);
  }

  getNavButtons(): NavButtonOptions {
    const { rtl } = this.props;
    let navButtons = NavButtonOptions.none;

    if (this._navRef && this._navRef.current) {
      const element = this._navRef.current;
      const { offsetWidth, scrollLeft, scrollWidth } = element;
      if (rtl) {
        if (scrollWidth !== offsetWidth + Math.abs(scrollLeft) + 1) {
          navButtons =
            scrollLeft === 0 ? NavButtonOptions.left : NavButtonOptions.both;
        } else {
          navButtons = NavButtonOptions.right;
        }
      } else {
        if (scrollLeft >= SCROLL_EPSILON) {
          navButtons = NavButtonOptions.left;
        }
        const scrollRight =
          element.scrollWidth - (element.scrollLeft + element.offsetWidth);
        if (scrollRight >= SCROLL_EPSILON) {
          navButtons =
            navButtons === NavButtonOptions.none
              ? NavButtonOptions.right
              : NavButtonOptions.both;
        }
      }
    }

    return navButtons;
  }

  _getDataAttributes() {
    const { alignment, variant } = this.props;

    return {
      [TABS_DATA_KEYS.alignment]: alignment,
      [TABS_DATA_KEYS.variant]: variant,
    };
  }

  render() {
    const { selectedIndicatorRect } = this.state;
    const {
      activeTabIndex,
      onClickItem,
      onScroll,
      items,
      alignment,
      variant,
      animateIndicator,
      className,
    } = this.props;

    return (
      <div
        className={st(
          classes.root,
          { alignment, variant, animateIndicator },
          className,
        )}
        {...this._getDataAttributes()}
        data-hook={TABS_DATA_HOOKS.scrollableTabs}
      >
        <nav className={classes.nav} ref={this._navRef} onScroll={onScroll}>
          <ul className={classes.itemsList} ref={this._listRef}>
            {items.map((item, index) => (
              <Tab
                key={`${item.title}-${index}`}
                className={classes.tab}
                item={item}
                index={index}
                data-hook={`${TABS_DATA_HOOKS.tab}-${index}`}
                isActive={activeTabIndex === index}
                indicateActive={!animateIndicator}
                ref={activeTabIndex === index ? this._selectedTabRef : null}
                onClick={onClickItem}
              />
            ))}
          </ul>
          <div
            className={classes.selectedIndicator}
            style={selectedIndicatorRect}
          />
        </nav>
        <div className={classes.border} />
      </div>
    );
  }
}
