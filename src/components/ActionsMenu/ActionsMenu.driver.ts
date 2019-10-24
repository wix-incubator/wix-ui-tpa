import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import {
  ACTIONS_MENU_DATA_KEYS,
  ACTIONS_MENU_ITEM_DATA_HOOK,
} from './dataHooks';

export interface ActionsMenuDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  clickItem(content): Promise<any>;
}

function actionsMenuItem(base: UniDriver, content) {
  return base.$(
    `[data-hook="${ACTIONS_MENU_ITEM_DATA_HOOK}"][data-content="${content}"]`,
  );
}

export const actionsMenuDriverFactory = (
  base: UniDriver,
): ActionsMenuDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () =>
      (await base.attr(ACTIONS_MENU_DATA_KEYS.mobile)) === 'true',
    clickItem: content => actionsMenuItem(base, content).click(),
  };
};
