import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface PopoverDriver extends BaseUniDriver {
  // isMobile(): Promise<boolean>;
}

export const popoverDriverFactory = (base: UniDriver): PopoverDriver => {
  return {
    ...baseUniDriverFactory(base),
    // isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
