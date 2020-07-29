import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { EVENT_DATA_KEYS } from './dataHooks';

export interface EventDriver extends BaseUniDriver {
  isTimeShown(): Promise<boolean>;
  isSelected(): Promise<boolean>;
  isFullday(): Promise<boolean>;
}

export const eventDriverFactory = (base: UniDriver): EventDriver => {
  return {
    ...baseUniDriverFactory(base),
    async isSelected() {
      return (await base.attr(EVENT_DATA_KEYS.IsSelected)) === 'true';
    },
    async isFullday() {
      return (await base.attr(EVENT_DATA_KEYS.IsFullDay)) === 'true';
    },
    async isTimeShown() {
      return (await base.attr(EVENT_DATA_KEYS.IsTimeShown)) === 'true';
    },
  };
};
