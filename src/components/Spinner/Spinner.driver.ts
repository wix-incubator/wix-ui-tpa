import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface SpinnerDriver extends BaseUniDriver {}

export const spinnerDriverFactory = (base: UniDriver): SpinnerDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
