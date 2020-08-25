import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface CounterBadgeDriver extends BaseUniDriver {

}

export const counterBadgeDriverFactory = (base: UniDriver): CounterBadgeDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
