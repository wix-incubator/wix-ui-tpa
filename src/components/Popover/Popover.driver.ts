import { testkit as corePopoverDriverFactory } from 'wix-ui-core/dist/src/components/popover/Popover.uni.driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export const popoverDriverFactory = (base: UniDriver, body: UniDriver) => {
  return corePopoverDriverFactory(base, body);
};
