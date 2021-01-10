import { UniDriver, BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { TABS_DATA_HOOKS, TABS_DATA_KEYS } from './dataHooks';

export interface TabsDriver extends BaseUniDriver {
  exists(): Promise<boolean>;
  getTitleAt(index: number): Promise<string>;
  clickTabAt(index: number): Promise<void>;
  getActiveTabIndex(): Promise<number>;
  isMobile(): Promise<boolean>;
  getSkin(): Promise<string>;
  getAlignment(): Promise<string>;
  getVariant(): Promise<string>;
  getNavButtonsShown(): Promise<string>;
  clickRightNavButton(): Promise<void>;
  clickLeftNavButton(): Promise<void>;
}

const getTab: any = (base: UniDriver, index: number) =>
  base.$(`[data-hook="${TABS_DATA_HOOKS.tab}-${index}"]`);

const getTabs: any = (base) =>
  base.$(`[data-hook="${TABS_DATA_HOOKS.scrollableTabs}"]`);

export const tabsDriverFactory = (base: UniDriver): TabsDriver => {
  return {
    ...baseUniDriverFactory(base),
    getTitleAt: (index) => getTab(base, index).text(),
    clickTabAt: (index) => getTab(base, index).click(),
    getActiveTabIndex: async () =>
      +(await base
        .$(`[${TABS_DATA_KEYS.tabIsActive}="true"]`)
        .attr(TABS_DATA_KEYS.tabIndex)),
    isMobile: async () => (await base.attr(TABS_DATA_KEYS.mobile)) === 'true',
    getSkin: () => base.attr(TABS_DATA_KEYS.skin),
    getAlignment: () => getTabs(base).attr(TABS_DATA_KEYS.alignment),
    getVariant: () => getTabs(base).attr(TABS_DATA_KEYS.variant),
    getNavButtonsShown: () => base.attr(TABS_DATA_KEYS.navButtons),
    clickRightNavButton: () =>
      base.$(`[data-hook="${TABS_DATA_HOOKS.rightNavButton}"]`).click(),
    clickLeftNavButton: () =>
      base.$(`[data-hook="${TABS_DATA_HOOKS.leftNavButton}"]`).click(),
  };
};
