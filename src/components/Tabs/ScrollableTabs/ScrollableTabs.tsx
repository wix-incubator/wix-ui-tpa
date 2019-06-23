import * as React from 'react';
// @ts-ignore
import * as isEqual from 'lodash/isEqual';
import { Tab, TabItem } from '../Tab/Tab';
import { ALIGNMENT as Alignment, VARIANT as Variant } from '../../Tabs';
import { animateElementByProp } from '../../../common/animations';
import { TABS_DATA_HOOKS, TABS_DATA_KEYS } from '../dataHooks';
import style from './ScrollableTabs.st.css';

export interface ScrollPosition {
  scrollLeft: number;
  scrollRight: number;
}

interface TabsUIRect {
  left: number;
  width: number;
}

interface ScrollableTabsProps {
  items: TabItem[];
  alignment: Alignment;
  variant: Variant;
  onScroll(event: React.UIEvent): void;
  onClickItem(index: number): void;
  className: string;
  activeTabIndex: number;
  animateIndicator?: boolean;
}

interface ScrollableTabsState {
  selectedIndicatorRect: TabsUIRect;
}

export class ScrollableTabs extends React.Component<
  ScrollableTabsProps,
  ScrollableTabsState
> {
  _navRef: React.RefObject<HTMLElement>;
  _selectedTabRef: React.RefObject<HTMLDivElement>;

  state = {
    selectedIndicatorRect: {
      left: 0,
      width: 0,
    },
  };

  constructor(props) {
    super(props);

    this._navRef = React.createRef();
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
      this._updateComponent();
    }
  }

  updateIndicatorPosition() {
    this._updateIndicatorPosition();
  }

  _updateComponent() {
    this._updateIndicatorPosition();
    this._scrollToViewIfNeeded();
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
    if (this._selectedTabRef && this._selectedTabRef.current) {
      const currentTabElement = this._selectedTabRef.current;
      const tabsElement = this._navRef.current;
      const leftLimit = tabsElement.scrollLeft;
      const rightLimit = leftLimit + tabsElement.clientWidth;
      const leftDelta = currentTabElement.offsetLeft - leftLimit;
      const rightDelta =
        currentTabElement.offsetLeft +
        currentTabElement.clientWidth -
        rightLimit;

      if (leftDelta < 0 || rightDelta > 0) {
        this._animateScroll(currentTabElement.offsetLeft);
      }
    }
  };

  _animateScroll(scrollLeft: number) {
    animateElementByProp('scrollLeft', this._navRef.current, scrollLeft);
  }

  scrollLeft() {
    this._scrollToSide(-1);
  }

  scrollRight() {
    this._scrollToSide(1);
  }

  _scrollToSide(scrollDirection: number) {
    const scrollWidth = this._navRef.current.scrollWidth;
    const scrollLeft = this._navRef.current.scrollLeft;
    const clientWidth = this._navRef.current.clientWidth;
    const scrollDistance =
      scrollDirection * Math.min(scrollWidth - scrollLeft, clientWidth);

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
          <div
            className={style.selectedIndicator}
            style={animateIndicator ? selectedIndicatorRect : null}
          />
        </nav>
      </div>
    );
  }
}
