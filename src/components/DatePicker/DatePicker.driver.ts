import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface DatePickerDriver extends BaseUniDriver {
  // isMobile(): Promise<boolean>;
}

export const datePickerDriverFactory = (base: UniDriver): DatePickerDriver => {
  return {
    ...baseUniDriverFactory(base),
    // isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
