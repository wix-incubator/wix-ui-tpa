import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { EVENT_DATA_KEYS } from './dataHooks';

export interface EventDriver extends BaseUniDriver {
  isTimeShown(): Promise<boolean>;
  isSelected(): Promise<boolean>;
  isMultiday(): Promise<boolean>;
}

export const eventDriverFactory = (base: UniDriver): EventDriver => {
  return {
    ...baseUniDriverFactory(base),
    async isSelected() {
      return (await base.attr(EVENT_DATA_KEYS.IsSelected)) === 'true';
    },
    async isMultiday() {
      return (await base.attr(EVENT_DATA_KEYS.IsMultiday)) === 'true';
    },
    async isTimeShown() {
      return (await base.attr(EVENT_DATA_KEYS.IsTimeShown)) === 'true';
    },
  };
};
