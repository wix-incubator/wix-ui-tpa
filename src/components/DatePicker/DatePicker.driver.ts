import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { DATA_HOOKS } from './constants';

// @ts-ignore
import { calendarDriverFactory as WSRCalendarDriverFactory } from 'wix-style-react/dist/src/Calendar/Calendar.driver';

export interface DatePickerDriver extends BaseUniDriver {
  // isMobile(): Promise<boolean>;
}

export const datePickerDriverFactory = (
    base: UniDriver,
    body: UniDriver,
): DatePickerDriver => {
  const wsrCalendarNode = base.$(`[data-hook="${DATA_HOOKS.WSR_CALENDAR}"]`);
  const WSRCalendarDriver = WSRCalendarDriverFactory(wsrCalendarNode, body);

  return {
    ...baseUniDriverFactory(base),
    // isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
