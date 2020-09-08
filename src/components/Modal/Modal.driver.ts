import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { MODAL_DATA_HOOKS } from './dataHooks';

export interface ModalDriver extends BaseUniDriver {
  getModalStage(): UniDriver;
  isModalShowed(): Promise<boolean>;
}

export const modalDriverFactory = (base: UniDriver): ModalDriver => {
  const getModalStage = () => base.$(`[data-hook="${MODAL_DATA_HOOKS.STAGE}"]`);

  return {
    ...baseUniDriverFactory(base),
    getModalStage,
    isModalShowed: async () => {
      let isShown;

      try {
        const stage = getModalStage();
        isShown = await stage.exists();
      } catch (e) {
        isShown = false;
      }

      return isShown;
    },
  };
};
