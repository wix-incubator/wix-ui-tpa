import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Tabs.st.css';
import { Simulate } from 'react-dom/test-utils';

export const tabsDriverFactory = ({ element }) => {
  const stylableDOMUtil = new StylableDOMUtil(style);

  const getItems: any = () =>
    Array.from(element.querySelector('nav').childNodes);

  return {
    exists: () => !!element,
    getTitles: () => getItems().map(item => item.textContent),
    clickTabAt: dataHook =>
      Simulate.click(element.querySelector(`[data-hook=${dataHook}]`)),
    getActiveTabIndex: () =>
      getItems().findIndex(item => item.classList.contains(style.activeTab)),
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin'),
    getContentAlignment: () =>
      stylableDOMUtil.getStyleState(element, 'contentAlignment'),
    getContentWidth: () =>
      stylableDOMUtil.getStyleState(element, 'contentWidth'),
  };
};
