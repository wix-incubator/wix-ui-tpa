import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { DATA_HOOKS } from './constants';

// @ts-ignore
import { datePickerDriverFactory as WSRDatePickerDriverFactory } from 'wix-style-react/dist/src/DatePicker/DatePicker.driver';


export interface DatePickerDriver extends BaseUniDriver {}

export const datePickerDriverFactory = (base: UniDriver): DatePickerDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
