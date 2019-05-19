import * as React from 'react';
import classnames from 'classnames';
import { ChevronLeft, ChevronRight } from 'wix-ui-icons-common';
import { TabItem } from '../Tab/Tab';
import { ScrollableTabs, ScrollState } from '../ScrollableTabs/ScrollableTabs';
import { TabsNavButton } from '../TabsNavButton/TabsNavButton';
import { ALIGNMENT, SKIN, VARIANT } from '../../Tabs/constants';
import style from './Tabs.st.css';

const enum NavButtonOptions {
  both = 'both',
  left = 'left',
  right = 'right',
  none = 'none',
}

export interface TabsProps {
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
}

interface TabsState {
  navButtons?: NavButtonOptions;
  tabsKey: string;
}

export class Tabs extends React.Component<TabsProps, TabsState> {
  state = {
    navButtons: NavButtonOptions.none,
    tabsKey: 'asd',
  };

  _onClickLeft = () => {};

  _onClickRight = () => {};

  _onClickItem = () => {};

  _onScrollStateChange = (state: ScrollState) => {
    const { navButtons } = this.state;
  };

  render() {
    const { items, alignment, skin, variant, activeTabIndex } = this.props;
    return (
      <div {...style('root', { skin, variant }, this.props)}>
        <ScrollableTabs
          alignment={alignment}
          items={items}
          className={style.navigation}
          onClickItem={this._onClickItem}
          onScrollStateChange={this._onScrollStateChange}
          activeTabIndex={activeTabIndex}
        />
        <TabsNavButton
          onClick={this._onClickLeft}
          className={classnames(style.navBtn, style.navBtnLeft)}
        >
          <ChevronLeft size="35" />
        </TabsNavButton>
        <TabsNavButton
          onClick={this._onClickRight}
          className={classnames(style.navBtn, style.navBtnRight)}
        >
          <ChevronRight size="35" />
        </TabsNavButton>
      </div>
    );
  }
}
