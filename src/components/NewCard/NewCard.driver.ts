import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface NewCardDriver extends BaseUniDriver {

}

export const newCardDriverFactory = (base: UniDriver): NewCardDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
