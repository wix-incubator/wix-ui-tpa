import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface SimpleDatePickerDriver extends BaseUniDriver {
  // isMobile(): Promise<boolean>;
}

export const simpleDatePickerDriverFactory = (base: UniDriver): SimpleDatePickerDriver => {
  return {
    ...baseUniDriverFactory(base),
    // isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
