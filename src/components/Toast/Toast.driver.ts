import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Toast.st.css';
import { TOAST_SKIN } from './Toast';

export interface ToastDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  isSuccess(): Promise<boolean>;
  isError(): Promise<boolean>;
  isStatus(): Promise<boolean>;
  getCloseButton(): Promise<UniDriver>;
  getMessage(): Promise<UniDriver>;
  isCloseButtonExists(): Promise<boolean>;
}

const hasSkin = async (base: UniDriver, skin: TOAST_SKIN): Promise<boolean> => {
  const skinValue = await base.attr('data-skin');
  return skinValue === skin;
};

export const toastDriverFactory = (base: UniDriver): ToastDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  const getCloseButton = async () => base.$('[data-hook="closeButton"]');
  const getMessage = async () => base.$('[data-hook="message"]');

  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
    /* Shows is the toast render with "success" skin */
    isSuccess: () => hasSkin(base, TOAST_SKIN.success),
    /* Shows is the toast render with "error" skin */
    isError: () => hasSkin(base, TOAST_SKIN.error),
    /* Shows is the toast render with "status" skin */
    isStatus: () => hasSkin(base, TOAST_SKIN.status),
    /* Shows is the toast render with close button (X icon) */
    isCloseButtonExists: async () => (await getCloseButton()).exists(),
    /* Returns close button driver. Can be used for interaction with close button, f.e. click etc */
    getCloseButton,
    /* Returns message driver. F.e can be used for checking proper message text */
    getMessage,
  };
};
