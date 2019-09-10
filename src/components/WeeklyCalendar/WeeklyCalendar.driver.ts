import { UniDriver } from 'wix-ui-test-utils/unidriver';
import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';

export interface WeeklyCalendarDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const weeklyCalendarDriverFactory = (
  base: UniDriver,
): WeeklyCalendarDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
