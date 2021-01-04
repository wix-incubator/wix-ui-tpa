import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface TagDriver extends BaseUniDriver {
  // isMobile(): Promise<boolean>;
}

export const tagDriverFactory = (base: UniDriver): TagDriver => {
  return {
    ...baseUniDriverFactory(base),
    // isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
