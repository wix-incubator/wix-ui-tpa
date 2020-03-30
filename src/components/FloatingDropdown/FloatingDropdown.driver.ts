import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface FloatingDropdownDriver extends BaseUniDriver {

}

export const floatingDropdownDriverFactory = (base: UniDriver): FloatingDropdownDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
