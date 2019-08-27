import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface {%ComponentName%}Driver extends BaseUniDriver {

}

export const {%componentName%}DriverFactory = (base: UniDriver): {%ComponentName%}Driver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
