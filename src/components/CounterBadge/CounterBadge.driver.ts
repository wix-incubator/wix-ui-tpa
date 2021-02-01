import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { DATA_HOOKS } from './constant';

export interface CounterBadgeDriver extends BaseUniDriver {
  getContent(): Promise<string>;
}

export const counterBadgeDriverFactory = (
  base: UniDriver,
): CounterBadgeDriver => {
  return {
    ...baseUniDriverFactory(base),
    getContent: async () => base.$(`[data-hook=${DATA_HOOKS.VALUE}]`).text(),
  };
};
