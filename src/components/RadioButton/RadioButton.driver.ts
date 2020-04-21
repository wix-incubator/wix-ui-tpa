import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface RadioButtonDriver extends BaseUniDriver {

}

export const radioButtonDriverFactory = (base: UniDriver): RadioButtonDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
