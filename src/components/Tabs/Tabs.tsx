import * as React from 'react';
import style from './Tabs.st.css';
import classNames from 'classnames';
import { ALIGNMENT, SKIN, VARIANT } from './constants';
import { TPAComponentsConsumer, TPAComponentsContext } from '../TPAComponentsConfig';

export interface TabsProps {
  /** tabs to be displayed */
  items: TabItem[];
  /** callback function when tab is selected , returning the selected TabItem */
  onTabClick?: Function;
  /** index of the selected tab item */
  activeTabIndex: number;
  /** control whether to display border under tabs*/
  skin?: SKIN;
  /** control where to align the tabs */
  alignment?: ALIGNMENT;
  /** control whether to set tabs on all content width*/
  variant?: VARIANT;
}

export interface TabItem {
  /** Title of the tab */
  title?: string;
}

const selectTab = (newActiveTabIndex, activeTabIndex, onTabClick) => {
  if (activeTabIndex !== newActiveTabIndex) {
    onTabClick(newActiveTabIndex);
  }
};

const renderTabItem = ({ item, index, onTabClick, activeTabIndex }) => {
  return (
    <div
      data-hook={`tab-item-${index}`}
      key={`tab-item-${index}`}
      onClick={() => selectTab(index, activeTabIndex, onTabClick)}
      className={classNames(style.tab, {
        [style.activeTab]: activeTabIndex === index,
      })}
    >
      {item.title}
    </div>
  );
};

export class Tabs extends React.Component<TabsProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'Tabs';
  static defaultProps = {
    onTabClick: (tabIndex: number) => {},
    skin: SKIN.fullUnderline,
    alignment: ALIGNMENT.center,
    variant: VARIANT.fit,
  };

  render() {
    const {
      items,
      activeTabIndex,
      onTabClick,
      skin,
      alignment,
      variant,
      ...rest
    } = this.props;

    return (
      <TPAComponentsConsumer>
        {
          ({mobile}) => <div
            {...style('root', { skin, alignment, variant, mobile }, rest)}
          >
            <nav>
              {items.map((item, index) =>
                renderTabItem({ item, index, onTabClick, activeTabIndex }),
              )}
            </nav>
          </div>
        }
      </TPAComponentsConsumer>
    );
  }
}

