import { Simulate } from 'react-dom/test-utils';
import { DATA_HOOKS } from './constants';

export const tabsDriverFactory = ({ element }) => {
  const getItems: any = () =>
    Array.from(element.querySelector('nav').childNodes);

  const getTabs: any = () =>
    element.querySelector(`[data-hook="${DATA_HOOKS.scrollableTabs}"]`);

  return {
    exists: () => !!element,
    getTitleAt: index => getItems()[index].textContent,
    clickTabAt: index => Simulate.click(getItems()[index]),
    getActiveTabIndex: () =>
      +element.querySelector('[data-active="true"]').getAttribute('data-index'),
    isMobile: () => element.getAttribute('data-mobile') === 'true',
    getSkin: () => element.getAttribute('data-skin'),
    getAlignment: () => getTabs().getAttribute('data-alignment'),
    getVariant: () => getTabs().getAttribute('data-variant'),
    getNavButtonsShown: () => getTabs().getAttribute('data-navbuttons'),
  };
};
