import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { POPOVER_DATA_KEYS } from './dataHooks';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface PopoverDriver extends BaseUniDriver {
}

export const popoverDriverFactory = (base: UniDriver): PopoverDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
