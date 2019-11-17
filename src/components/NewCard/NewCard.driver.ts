import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { NEWCARD_DATA_KEYS } from './dataHooks';

export interface NewCardDriver extends BaseUniDriver {
  isStacked(): Promise<boolean>;
}

export const newCardDriverFactory = (base: UniDriver): NewCardDriver => {
  return {
    ...baseUniDriverFactory(base),
    async isStacked() {
      return (await base.attr(NEWCARD_DATA_KEYS.Stacked)) === 'true';
    },
  };
};
