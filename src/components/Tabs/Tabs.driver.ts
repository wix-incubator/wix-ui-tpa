import { Simulate } from 'react-dom/test-utils';
import { TABS_DATA_HOOKS, TABS_DATA_KEYS } from './dataHooks';

export const tabsDriverFactory = ({ element }) => {
  const getItems: any = () =>
    Array.from(element.querySelector('nav').childNodes);

  const getTabs: any = () =>
    element.querySelector(`[data-hook="${TABS_DATA_HOOKS.scrollableTabs}"]`);

  return {
    exists: () => !!element,
    getTitleAt: index => getItems()[index].textContent,
    clickTabAt: index => Simulate.click(getItems()[index]),
    getActiveTabIndex: () =>
      +element.querySelector(`[${TABS_DATA_KEYS.tabIsActive}="true"]`).getAttribute(TABS_DATA_KEYS.tabIndex),
    isMobile: () => element.getAttribute(TABS_DATA_KEYS.mobile) === 'true',
    getSkin: () => element.getAttribute(TABS_DATA_KEYS.skin),
    getAlignment: () => getTabs().getAttribute(TABS_DATA_KEYS.alignment),
    getVariant: () => getTabs().getAttribute(TABS_DATA_KEYS.variant),
    getNavButtonsShown: () => getTabs().getAttribute(TABS_DATA_KEYS.navButtons),
  };
};
