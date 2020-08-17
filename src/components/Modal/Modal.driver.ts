import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ModalDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  getModalBox(): UniDriver;
  isModalShowed(): Promise<boolean>;
  getCloseButton(): UniDriver;
  clickOnCloseButton(): Promise<void>;
}

export const modalDriverFactory = (base: UniDriver): ModalDriver => {
  const modalBoxDataHook = 'tpa-modal-box';
  const modalCloseButtonHook = 'tpa-modal-close-btn';

  const getModalBox = (): UniDriver =>
    base.$(`[data-hook="${modalBoxDataHook}"]`);
  const getCloseButton = (): UniDriver =>
    base.$(`[data-hook="${modalCloseButtonHook}"]`);

  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
    getModalBox,
    isModalShowed: async () => {
      return (await getModalBox().attr('data-is-open')) === 'true';
    },
    getCloseButton,
    clickOnCloseButton: async () => {
      await getCloseButton().click();
    },
  };
};
