import * as React from 'react';
import style from './Tabs.st.css';
import classNames from 'classnames';
import { CONTENT_ALIGNMENT, SKIN, CONTENT_WIDTH } from './constants';

export interface TabsProps {
  /** Items to be render as tabs - See TabItem */
  items: TabItem[];
  /** Callback function when tab is selected , returning the selected TabItem */
  onClick?: Function;
  /** Id of the selected tab item */
  activeId: string | number;
  /** Control whether to display border under tabs*/
  skin?: string;
  /** Control where to align the tabs */
  contentAlignment?: string;
  /** Control whether to stretch tabs on all content width*/
  contentWidth?: string;
}

export interface TabItem {
  /** Title of the tab */
  title?: string;
  /** Id of the tab */
  id: string | number;
  /** Data hook of the tab */
  dataHook?: string;
}

const selectTab = (selectedTab, activeId, onClick) => {
  if (activeId !== selectedTab.id) {
    onClick(selectedTab);
  }
};

const renderTabItem = ({ item, onClick, activeId }) => {
  return (
    <div
      data-hook={item.dataHook}
      key={`tab-item-${item.id}`}
      onClick={() => selectTab(item, activeId, onClick)}
      className={classNames(style.tab, {
        [style.activeTab]: activeId === item.id,
      })}
    >
      {item.title}
    </div>
  );
};

const Tabs = props => {
  const { items, skin, contentAlignment, contentWidth, ...rest } = props;
  return (
    <div {...style('root', { skin, contentAlignment, contentWidth }, rest)}>
      <nav>{items.map(item => renderTabItem({ item, ...props }))}</nav>
    </div>
  );
};

Tabs.defaultProps = {
  onClick: () => {},
  skin: SKIN.underline,
  contentAlignment: CONTENT_ALIGNMENT.center,
  contentWidth: CONTENT_WIDTH.shrink,
};

export { Tabs };
