import * as React from 'react';
import { Tab, TabItem } from '../Tab/Tab';
import { ALIGNMENT as Alignment } from '../../Tabs';
import { animateProp } from '../../../common/animations';
import style from './ScrollableTabs.st.css';

interface TabsUIRect {
  left: number;
  width: number;
}

export interface ScrollState {
  scrollLeft: number;
  scrollWidth: number;
}

interface ScrollableTabsProps {
  items: TabItem[];
  alignment: Alignment;
  onScrollStateChange(state: ScrollState): void;
  onClickItem(): void;
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

  componentDidMount() {
    const { onScrollStateChange } = this.props;

    this._updateComponent();

    onScrollStateChange({
      scrollLeft: this._navRef.current.scrollLeft,
      scrollWidth: this._navRef.current.scrollWidth,
    });
  }

  componentDidUpdate = this._updateComponent;

  _updateComponent() {
    this._updateIndicatorPosition();
    this._scrollToViewIfNeeded();
  }

  _updateIndicatorPosition() {
    const { selectedIndicatorRect } = this.state;
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

  _getTabItem = (item: TabItem, index: number) => {
    const { activeTabIndex, onClickItem } = this.props;
    const isActive = activeTabIndex === index;

    return (
      <Tab
        key={`${item.title}-${index}`}
        className={style.tab}
        item={item}
        index={index}
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

  scrollTo(scrollLeft: number) {
    this._animateScroll(scrollLeft);
  }

  _animateScroll(scrollLeft: number) {
    animateProp('scrollLeft', this._navRef.current, scrollLeft);
  }

  _onScroll = () => {
    const { onScrollStateChange } = this.props;
    onScrollStateChange({
      scrollLeft: this._navRef.current.scrollLeft,
      scrollWidth: this._navRef.current.scrollWidth,
    });
  };

  render() {
    const { selectedIndicatorRect } = this.state;
    const { items, alignment } = this.props;

    return (
      <div {...style('root', { alignment }, this.props)}>
        <nav ref={this._navRef} onScroll={this._onScroll}>
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
