import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ThemedDatePickerDriver extends BaseUniDriver {
  // isMobile(): Promise<boolean>;
}

export const themedDatePickerDriverFactory = (
  base: UniDriver,
): ThemedDatePickerDriver => {
  return {
    ...baseUniDriverFactory(base),
    // isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
