import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { DATA_HOOKS } from './constants';
import {
  IconButtonDriver,
  iconButtonDriverFactory,
} from '../IconButton/IconButton.driver';

export interface ModalDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  getCloseButtonDriver(): Promise<IconButtonDriver>;
}

export const modalDriverFactory = (base: UniDriver): ModalDriver => {
  const baseUniDriver = baseUniDriverFactory(base);

  return {
    ...baseUniDriver,
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
    getCloseButtonDriver: async () => {
      const closeButton: UniDriver = base.$(
        `[data-hook="${DATA_HOOKS.closeIconButton}"]`,
      );
      return iconButtonDriverFactory(closeButton);
    },
  };
};
