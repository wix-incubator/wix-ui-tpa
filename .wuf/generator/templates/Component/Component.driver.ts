import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface {%ComponentName%}Driver extends BaseUniDriver {
  // isMobile(): Promise<boolean>;
}

export const {%componentName%}DriverFactory = (base: UniDriver): {%ComponentName%}Driver => {
  return {
    ...baseUniDriverFactory(base),
    // isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
