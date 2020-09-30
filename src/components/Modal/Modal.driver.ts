import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { MODAL_DATA_HOOKS } from './dataHooks';

export interface ModalDriver extends BaseUniDriver {
  getModalContent(): UniDriver;
  isOpen(): Promise<boolean>;
}

export const modalDriverFactory = (base: UniDriver): ModalDriver => {
  const getModalContent = () =>
    base.$(`[data-hook="${MODAL_DATA_HOOKS.CONTENT}"]`);

  return {
    ...baseUniDriverFactory(base),
    getModalContent,
    isOpen: async () => {
      let isOpen;

      try {
        const content = getModalContent();
        isOpen = await content.exists();
      } catch (e) {
        isOpen = false;
      }

      return isOpen;
    },
  };
};
