import { UniDriver } from 'wix-ui-test-utils/unidriver';
import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';

export interface CalendarDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const calendarDriverFactory = (base: UniDriver): CalendarDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
