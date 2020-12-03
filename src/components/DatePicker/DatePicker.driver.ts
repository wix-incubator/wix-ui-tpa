import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { DATA_HOOKS } from './constants';

// @ts-ignore
// import { datePickerDriverFactory as WSRDatePickerDriverFactory } from 'wix-style-react/dist/src/DatePicker/DatePicker.driver';

export interface DatePickerDriver extends BaseUniDriver {
  getTextFieldElement(): Promise<HTMLElement>;
  openCalendarWindow(): Promise<void>;
}

export const datePickerDriverFactory = (base: UniDriver): DatePickerDriver => {
  const dateInputElement = base.$(`[data-hook=${DATA_HOOKS.DATE_INPUT}]`);

  return {
    ...baseUniDriverFactory(base),

    getTextFieldElement: () => {
      return dateInputElement.getNative();
    },
    /**
     * open the calender window
     * @return {Promise<void>}
     */
    openCalendarWindow: () => base.$('input').click(),
  };
};
