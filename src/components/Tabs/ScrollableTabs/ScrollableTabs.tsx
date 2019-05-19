import * as React from 'react';
import { Tab, TabItem } from '../Tab/Tab';
import { ALIGNMENT as Alignment, VARIANT as Variant } from '../../Tabs';
import { animateProp } from '../../../common/animations';
import style from './ScrollableTabs.st.css';

const isEqual = require('lodash/isEqual');

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

  componentDidMount = this._updateComponent;

  componentDidUpdate(prevProps: ScrollableTabsProps) {
    if (
      prevProps.activeTabIndex !== this.props.activeTabIndex ||
      !isEqual(prevProps.items, this.props.items) ||
      prevProps.alignment !== this.props.alignment ||
      prevProps.variant !== this.props.variant
    ) {
      this._updateComponent();
    }
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

  _getTabItem = (item: TabItem, index: number) => {
    const { activeTabIndex, onClickItem } = this.props;
    const isActive = activeTabIndex === index;

    return (
      <Tab
        key={`${item.title}-${index}`}
        className={style.tab}
        item={item}
        index={index}
        isActive={isActive}
        ref={isActive ? this._selectedTabRef : null}
        onClick={onClickItem}
      />
    );
  };

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
    animateProp('scrollLeft', this._navRef.current, scrollLeft);
  }

  scrollLeft() {
    this._animateScroll(-1 * this._navRef.current.clientWidth);
  }

  scrollRight() {
    this._animateScroll(this._navRef.current.clientWidth);
  }

  getNavElement() {
    return (this._navRef && this._navRef.current) || null;
  }

  render() {
    const { selectedIndicatorRect } = this.state;
    const { onScroll, items, alignment, variant, ...rest } = this.props;

    return (
      <div {...style('root', { alignment, variant }, rest)}>
        <nav className={style.nav} ref={this._navRef} onScroll={onScroll}>
          {items.map(this._getTabItem)}
          <div
            className={style.selectedIndicator}
            style={selectedIndicatorRect}
          />
        </nav>
      </div>
    );
  }
}
