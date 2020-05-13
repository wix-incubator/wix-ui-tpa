import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface PickerDriver extends BaseUniDriver {}

export const pickerDriverFactory = (base: UniDriver): PickerDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
