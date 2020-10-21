import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface DatePickerDriver extends BaseUniDriver {}

export const datePickerDriverFactory = (base: UniDriver): DatePickerDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
