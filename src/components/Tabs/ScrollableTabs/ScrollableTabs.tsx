import * as React from 'react';
import { detectScrollType, ScrollType } from 'normalize-scroll-left';
import { Tab, TabItem } from '../Tab/Tab';
import { ALIGNMENT as Alignment, VARIANT as Variant } from '../../Tabs';
import { animateElementByProp } from '../../../common/animations';
import { TABS_DATA_HOOKS, TABS_DATA_KEYS } from '../dataHooks';
import { TPAComponentProps } from '../../../types';
import { st, classes } from './ScrollableTabs.st.css';

const isEqual = require('lodash/isEqual');

export interface ScrollPosition {
  scrollLeft: number;
  scrollRight: number;
}

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
  'aria-label'?: string;
  'aria-labelledby'?: string;
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
  private _rtlScrollType: ScrollType;

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
    const { rtl } = this.props;

    if (rtl) {
      this._setRtlScrollType();
    }

    this._updateComponent(true);
  }

  componentDidUpdate(
    prevProps: ScrollableTabsProps,
    prevState: ScrollableTabsState,
  ) {
    if (this.props.rtl && !this._rtlScrollType) {
      this._setRtlScrollType();
    }

    if (
      prevProps.activeTabIndex !== this.props.activeTabIndex ||
      !isEqual(prevProps.items, this.props.items) ||
      prevProps.alignment !== this.props.alignment ||
      prevProps.variant !== this.props.variant ||
      prevProps.rtl !== this.props.rtl
    ) {
      this._updateComponent(
        prevProps.activeTabIndex !== this.props.activeTabIndex ||
          prevProps.rtl !== this.props.rtl,
      );
    }
  }

  updateIndicatorPosition() {
    this._updateIndicatorPosition();
  }

  _setRtlScrollType() {
    this._rtlScrollType = detectScrollType();
  }

  _getNormalizedScrollLeft() {
    const { rtl } = this.props;
    let normalizedLeft = 0;

    if (this._navRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = this._navRef.current;
      normalizedLeft = Math.abs(scrollLeft);

      if (
        rtl &&
        (this._rtlScrollType === 'negative' ||
          this._rtlScrollType === 'reverse')
      ) {
        normalizedLeft = scrollWidth - (normalizedLeft + offsetWidth);
      }
    }

    return normalizedLeft;
  }

  _getNormalizedScrollRight(scrollLeft: number) {
    let normalizedRight = 0;

    if (this._navRef.current) {
      const { scrollWidth, offsetWidth } = this._navRef.current;
      normalizedRight = scrollWidth - (scrollLeft + offsetWidth);
    }

    return normalizedRight;
  }

  _updateComponent(shouldScroll = false) {
    this._updateIndicatorPosition();

    if (shouldScroll) {
      this._scrollToViewIfNeeded();
    }
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

  _scrollToViewIfNeeded = () => {
    const { rtl, scrollButtons } = this.props;
    const { left, right } = scrollButtons;

    if (this._selectedTabRef.current) {
      const currentTabElement = this._selectedTabRef.current;
      const navElement = this._navRef.current;

      const tabOffsetLeft = currentTabElement.offsetLeft;
      const tabOffsetWidth = currentTabElement.offsetWidth;
      const navOffsetWidth = navElement.offsetWidth;
      const navScrollWidth = navElement.scrollWidth;

      const buttonGap = rtl ? right : left;
      let scrollTo = tabOffsetLeft - buttonGap;

      if (rtl) {
        const rtlOffset = navOffsetWidth - tabOffsetWidth - 2 * buttonGap;
        switch (this._rtlScrollType) {
          case 'default':
            scrollTo += navScrollWidth - navOffsetWidth - rtlOffset;
            break;
          case 'reverse':
            scrollTo = -scrollTo + rtlOffset;
            break;
          default:
            scrollTo -= rtlOffset;
        }
      }

      this._animateScroll(scrollTo);
    }
  };

  _getMaxMinScroll() {
    const { rtl } = this.props;
    let min = 0;
    let max = 0;

    if (this._navRef.current) {
      const { scrollWidth, offsetWidth } = this._navRef.current;
      max = scrollWidth - offsetWidth;

      if (rtl) {
        // tslint:disable-next-line:switch-default
        switch (this._rtlScrollType) {
          case 'negative':
            min = -1 * max;
            max = 0;
        }
      }
    }

    return {
      min,
      max,
    };
  }

  _animateScroll(scrollTo: number) {
    if (this._cancelAnimation) {
      this._cancelAnimation();
    }

    const { min, max } = this._getMaxMinScroll();
    const moveTo = Math.min(Math.max(scrollTo, min), max);

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
    if (this._navRef.current) {
      const { scrollLeft, clientWidth } = this._navRef.current;
      const rtlDirectionFix = this._rtlScrollType === 'reverse' ? -1 : 1;
      const scrollDistance =
        rtlDirectionFix * scrollDirection * (clientWidth / 2);

      this._animateScroll(scrollLeft + scrollDistance);
    }
  }

  getNavScrollPosition(): ScrollPosition {
    const scrollPosition = { scrollLeft: 0, scrollRight: 0 };

    if (this._navRef && this._navRef.current) {
      const scrollLeft = this._getNormalizedScrollLeft();

      scrollPosition.scrollLeft = scrollLeft;
      scrollPosition.scrollRight = this._getNormalizedScrollRight(scrollLeft);
    }

    return scrollPosition;
  }

  _getDataAttributes() {
    const { alignment, variant } = this.props;

    return {
      [TABS_DATA_KEYS.alignment]: alignment,
      [TABS_DATA_KEYS.variant]: variant,
    };
  }

  _onScroll = (e) => {
    const { onScroll } = this.props;
    onScroll(e);
  };

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
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabeledBy,
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
        <nav
          className={classes.nav}
          ref={this._navRef}
          onScroll={this._onScroll}
          aria-labelledby={ariaLabeledBy}
          aria-label={ariaLabel}
        >
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
