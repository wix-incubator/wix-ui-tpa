import * as React from 'react';
import { isSelectKey } from './utils';
import { animateProp } from '../../common/animations';

export interface TabItem {
  /** Title of the tab */
  title?: string;
}

interface TabsNavButtonProps {
  onClick(): void;
  className: string;
}

class TabsNavButton extends React.PureComponent<TabsNavButtonProps> {
  render() {
    const { onClick, className, children } = this.props;

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const keyCode = e.keyCode;

      if (isSelectKey(keyCode)) {
        onClick();
        return false;
      }
    };

    return (
      <div
        className={className}
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    );
  }
}

function Tab({ index, className, title, onClick, tabRef }) {
  const onSelectTab = () => {
    onClick(index);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyCode = e.keyCode;

    if (isSelectKey(keyCode)) {
      onSelectTab();
      return false;
    }
  };

  return (
    <div
      data-hook={`tab-item-${index}`}
      data-index={index}
      key={`${title}-${index}`}
      onClick={onSelectTab}
      onKeyDown={onKeyDown}
      className={className}
      tabIndex={0}
      ref={tabRef}
    >
      {title}
    </div>
  );
}

interface TabsUIRect {
  left: number;
  width: number;
}

interface TabsNavigationProps {
  items: TabItem[];
  onScroll(): void;
  onClickItem(): void;
  className: string;
  activeTabIndex: number;
  tabClassName: string;
  indicatorClassName: string;
}

interface TabsNavigationState {
  activeIndicatorRect: TabsUIRect;
}

class TabsNavigation extends React.Component<
  TabsNavigationProps,
  TabsNavigationState
> {
  _navRef: React.RefObject<HTMLElement>;
  _selectedTabRef: React.RefObject<HTMLElement>;

  state = {
    activeIndicatorRect: {
      left: 0,
      width: 0,
    },
  };

  constructor(props: TabsNavigationProps) {
    super(props);

    this._navRef = React.createRef();
    this._selectedTabRef = React.createRef();
  }

  componentDidMount = this._updateComponent;
  componentDidUpdate = this._updateComponent;

  _updateComponent() {
    this._updateIndicatorPosition();
    this._scrollToViewIfNeeded();
  }

  _updateIndicatorPosition() {
    if (this._selectedTabRef && this._selectedTabRef.current) {
      const newLeft = this._selectedTabRef.current.offsetLeft;
      const newWidth = this._selectedTabRef.current.offsetWidth;

      this.setState({
        activeIndicatorRect: { left: newLeft, width: newWidth },
      });
    }
  }

  _getTabItem(item: TabItem, index: number) {
    const { activeTabIndex, onClickItem, tabClassName } = this.props;
    const isActive = activeTabIndex === index;

    return (
      <Tab
        key={`${item.title}-${index}`}
        title={item.title}
        index={index}
        className={tabClassName}
        onClick={onClickItem}
        tabRef={isActive ? this._selectedTabRef : null}
      />
    );
  }

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

  scrollTo(scrollLeft: number) {
    this._animateScroll(scrollLeft);
  }

  _animateScroll(scrollLeft: number) {
    animateProp('scrollLeft', this._navRef.current, scrollLeft);
  }

  render() {
    const { activeIndicatorRect } = this.state;
    const { items, onScroll, className, indicatorClassName } = this.props;

    return (
      <div className={className}>
        <nav ref={this._navRef} onScroll={onScroll}>
          {items.map(this._getTabItem)}
          <div className={indicatorClassName} style={activeIndicatorRect} />
        </nav>
      </div>
    );
  }
}

export { TabsNavButton, TabsNavigation };
