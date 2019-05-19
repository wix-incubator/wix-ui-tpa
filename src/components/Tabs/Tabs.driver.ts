import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Tabs.st.css';
import innerStyle from './ScrollableTabs/ScrollableTabs.st.css';
import { Simulate } from 'react-dom/test-utils';

export const tabsDriverFactory = ({ element }) => {
  const stylableDOMUtil = new StylableDOMUtil(style);
  const innerStylableDOMUtil = new StylableDOMUtil(innerStyle);

  const getItems: any = () =>
    Array.from(element.querySelector('nav').childNodes);

  const getTabs: any = () => element.querySelector('nav').parentNode;

  return {
    exists: () => !!element,
    getTitleAt: index => getItems()[index].textContent,
    clickTabAt: index => Simulate.click(getItems()[index]),
    getActiveTabIndex: () =>
      +element.querySelector('[data-active="true"]').getAttribute('data-index'),
    getSkin: () => innerStylableDOMUtil.getStyleState(getTabs(), 'skin'),
    getAlignment: () => innerStylableDOMUtil.getStyleState(getTabs(), 'alignment'),
    getVariant: () => innerStylableDOMUtil.getStyleState(getTabs(), 'variant'),
    isMobile: () => stylableDOMUtil.getStyleState(element, 'mobile') === 'true',
  };
};
