import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { CALENDAR_DATA_KEYS } from './dataHooks';
import { Times } from './CalendarCell';

export interface CalendarCellDriver extends BaseUniDriver {
  isNextMonth(): Promise<boolean>;
  isPreviousDays(): Promise<boolean>;
  isPreviousMonth(): Promise<boolean>;
  isStretched(): Promise<boolean>;
  isCurrentDay(): Promise<boolean>;
}

export const calendarCellDriverFactory = (
  base: UniDriver,
): CalendarCellDriver => {
  return {
    ...baseUniDriverFactory(base),
    async isStretched() {
      return (await base.attr(CALENDAR_DATA_KEYS.IsStretchAble)) === 'true';
    },
    async isPreviousMonth() {
      return (await base.attr(CALENDAR_DATA_KEYS.TimeType)) === Times.previousMonth;
    },
    async isPreviousDays() {
      return (await base.attr(CALENDAR_DATA_KEYS.TimeType)) === Times.previousDays;
    },
    async isCurrentDay() {
      return (await base.attr(CALENDAR_DATA_KEYS.TimeType)) === Times.currentDay;
    },
    async isNextMonth() {
      return (await base.attr(CALENDAR_DATA_KEYS.TimeType)) === Times.nextMonth;
    }
  };
};
