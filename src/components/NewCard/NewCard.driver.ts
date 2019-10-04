import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { NEWCARD_DATA_KEYS } from './dataHooks';

export interface NewCardDriver extends BaseUniDriver {
  hasStacked(): Promise<boolean>;
}

export const newCardDriverFactory = (base: UniDriver): NewCardDriver => {
  return {
    ...baseUniDriverFactory(base),
    async hasStacked() {
      return (await base.attr(NEWCARD_DATA_KEYS.Stacked)) === 'true';
    },
  };
};
