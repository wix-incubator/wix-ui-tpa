import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './ActionsMenu.st.css';

export interface ActionsMenuDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const actionsMenuDriverFactory = (
  base: UniDriver,
): ActionsMenuDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
  };
};
