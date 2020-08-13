import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ModalDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const modalDriverFactory = (base: UniDriver): ModalDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
