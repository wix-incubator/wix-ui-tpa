import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import {
  ACTIONS_MENU_DATA_KEYS,
  ACTIONS_MENU_ITEM_DATA_HOOK,
} from './dataHooks';

export interface ActionsMenuLayoutDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  clickItem(content): Promise<any>;
  item(content): UniDriver<HTMLLIElement>;
  layout(): UniDriver<HTMLUListElement>;
  isItemFocused(content): Promise<boolean>;
}

function actionsMenuLayoutItem(base: UniDriver, content) {
  return base.$(
    `[data-hook="${ACTIONS_MENU_ITEM_DATA_HOOK}"][data-content="${content}"]`,
  );
}

export const actionsMenuLayoutDriverFactory = (
  base: UniDriver,
): ActionsMenuLayoutDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () =>
      (await base.attr(ACTIONS_MENU_DATA_KEYS.mobile)) === 'true',
    item: (content) => actionsMenuLayoutItem(base, content),
    clickItem: (content) => actionsMenuLayoutItem(base, content).click(),
    isItemFocused: async (content) =>
      (await actionsMenuLayoutItem(base, content).getNative()) ===
      document.activeElement,
    layout: () => base,
  };
};
