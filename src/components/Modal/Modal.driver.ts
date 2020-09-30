import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { MODAL_DATA_HOOKS } from './dataHooks';

export interface ModalDriver extends BaseUniDriver {
  getModalContent(): UniDriver;
  isModalShowed(): Promise<boolean>;
}

export const modalDriverFactory = (base: UniDriver): ModalDriver => {
  const getModalContent = () =>
    base.$(`[data-hook="${MODAL_DATA_HOOKS.CONTENT}"]`);

  return {
    ...baseUniDriverFactory(base),
    getModalContent,
    isModalShowed: async () => {
      let isShown;

      try {
        const content = getModalContent();
        isShown = await content.exists();
      } catch (e) {
        isShown = false;
      }

      return isShown;
    },
  };
};
