import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { TOAST_SKIN } from './types';

export interface ToastDriver extends BaseUniDriver {
  isShown(): Promise<boolean>;
  isMobile(): Promise<boolean>;
  isSuccess(): Promise<boolean>;
  isError(): Promise<boolean>;
  isStatus(): Promise<boolean>;
  getCloseButton(): Promise<UniDriver>;
  getMessage(): Promise<UniDriver>;
  isCloseButtonExists(): Promise<boolean>;
}

const hasSkin = async (base: UniDriver, skin: TOAST_SKIN): Promise<boolean> => {
  return hasDataAttr(base, 'skin', skin);
};

const hasMobile = async (base: UniDriver): Promise<boolean> => {
  return hasDataAttr(base, 'mobile', 'true');
};

const hasIsShown = async (base: UniDriver): Promise<boolean> => {
  return hasDataAttr(base, 'is-shown', 'true');
};

const hasDataAttr = async (
  base: UniDriver,
  field: string,
  expectedValue: any,
): Promise<boolean> => {
  const fieldValue = await base.attr(`data-${field}`);
  return fieldValue === expectedValue;
};

export const toastDriverFactory = (base: UniDriver): ToastDriver => {
  const getCloseButton = async () => base.$('[data-hook="closeButton"]');
  const getMessage = async () => base.$('[data-hook="message"]');

  return {
    ...baseUniDriverFactory(base),
    /* Shows is the animated toast visible at the moment ot not */
    isShown: () => hasIsShown(base),
    isMobile: () => hasMobile(base),
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
