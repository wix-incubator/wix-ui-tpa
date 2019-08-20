import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { ACTIONS_MENU__DATA_KEYS } from "./dataHooks";

export interface ActionsMenuDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const actionsMenuDriverFactory = (
  base: UniDriver,
): ActionsMenuDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr(ACTIONS_MENU__DATA_KEYS.mobile)) === 'true',
  };
};
