import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Tabs.st.css';
import { Simulate } from 'react-dom/test-utils';

export const tabsDriverFactory = ({ element }) => {
  const stylableDOMUtil = new StylableDOMUtil(style);

  const getItems: any = () =>
    Array.from(element.querySelector('nav').childNodes);

  return {
    exists: () => !!element,
    getTitleAt: index => getItems()[index].textContent,
    clickTabAt: index => Simulate.click(getItems()[index]),
    getActiveTabIndex: () =>
      getItems().findIndex(item => item.classList.contains(style.activeTab)),
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin'),
    getAlignment: () => stylableDOMUtil.getStyleState(element, 'alignment'),
    getVariant: () => stylableDOMUtil.getStyleState(element, 'variant'),
  };
};
