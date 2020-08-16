import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ModalDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  getOpenButton(): UniDriver;
  clickOnOpenButton(): Promise<void>;
  getModalBox(): UniDriver;
  isModalShowed(): Promise<boolean>;
  getCloseButton(): UniDriver;
  clickOnCloseButton(): Promise<void>;
}

export const modalDriverFactory = (base: UniDriver): ModalDriver => {
  const openButtonDataHook = 'e2e-storybook-modal-open-btn';
  const modalBoxDataHook = 'tpa-modal-box';
  const modalCloseButtonHook = 'tpa-modal-close-btn';

  const getOpenButton = (): UniDriver =>
    base.$(`[data-hook="${openButtonDataHook}"]`);
  const getModalBox = (): UniDriver =>
    base.$(`[data-hook="${modalBoxDataHook}"]`);
  const getCloseButton = (): UniDriver =>
    base.$(`[data-hook="${modalCloseButtonHook}"]`);

  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
    getOpenButton,
    clickOnOpenButton: async () => {
      await getOpenButton().click();
    },
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
