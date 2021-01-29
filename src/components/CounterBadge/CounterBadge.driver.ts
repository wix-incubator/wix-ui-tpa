import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface CounterBadgeDriver extends BaseUniDriver {
  getContent(): Promise<string>;
}

export const counterBadgeDriverFactory = (
  base: UniDriver,
): CounterBadgeDriver => {
  return {
    ...baseUniDriverFactory(base),
    getContent: async () => base.$('[data-hook="counter-badge-value"]').text(),
  };
};
