import * as React from 'react';
// @ts-ignore
import * as isEqual from 'lodash/isEqual';
import { Tab, TabItem } from '../Tab/Tab';
import { ALIGNMENT as Alignment, VARIANT as Variant } from '../../Tabs';
import { animateElementByProp } from '../../../common/animations';
import { TABS_DATA_HOOKS, TABS_DATA_KEYS } from '../dataHooks';
import style from './ScrollableTabs.st.css';
import { TPAComponentProps } from '../../../types';

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
      prevProps.variant !== this.props.variant
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

    if (this._selectedTabRef && this._selectedTabRef.current) {
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
      let scrollAmount = currentTabElement.offsetLeft - buttonGap;

      if (rtl) {
        scrollAmount =
          navElement.scrollWidth -
          (navElement.offsetWidth -
            (currentTabElement.offsetLeft +
              buttonGap +
              currentTabElement.offsetWidth)) -
          navElement.offsetWidth;
      }

      if (newSelectedTab || leftDelta < 0 || rightDelta > 0) {
        this._animateScroll(scrollAmount);
      }
    }
  };

  _getMaxMinScroll() {
    const navElement = this._navRef.current;

    return {
      max: navElement.scrollWidth - navElement.offsetWidth,
      min: 0,
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

  getNavScrollPosition(): ScrollPosition {
    const scrollPosition = { scrollLeft: 0, scrollRight: 0 };

    if (this._navRef && this._navRef.current) {
      const element = this._navRef.current;

      scrollPosition.scrollLeft = element.scrollLeft;
      scrollPosition.scrollRight =
        element.scrollWidth - (element.scrollLeft + element.offsetWidth);
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
      ...rest
    } = this.props;

    return (
      <div
        {...style('root', { alignment, variant, animateIndicator }, rest)}
        {...this._getDataAttributes()}
        data-hook={TABS_DATA_HOOKS.scrollableTabs}
      >
        <nav className={style.nav} ref={this._navRef} onScroll={onScroll}>
          <ul className={style.itemsList} ref={this._listRef}>
            {items.map((item, index) => (
              <Tab
                key={`${item.title}-${index}`}
                className={style.tab}
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
            className={style.selectedIndicator}
            style={selectedIndicatorRect}
          />
        </nav>
        <div className={style.border} />
      </div>
    );
  }
}
