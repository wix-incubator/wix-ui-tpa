import { Simulate } from 'react-dom/test-utils';

import { popoverDriverFactory as corePopoverDriverFactory } from 'wix-ui-core/dist/src/components/popover/Popover.driver';

export const popoverDriverFactory = ({ element }) => {
  return corePopoverDriverFactory({
    element,
    eventTrigger: Simulate,
  });
};
