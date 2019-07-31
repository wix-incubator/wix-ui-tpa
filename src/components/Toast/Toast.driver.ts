import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Toast.st.css';

export interface ToastDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const toastDriverFactory = (base: UniDriver): ToastDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
  };
};
