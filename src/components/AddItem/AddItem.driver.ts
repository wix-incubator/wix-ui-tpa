import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface AddItemDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const addItemDriverFactory = (base: UniDriver): AddItemDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
