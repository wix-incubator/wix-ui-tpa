import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { CALENDAR_DATA_KEYS } from './dataHooks';
import { Alignment } from './CalendarCell';

export interface CalendarCellDriver extends BaseUniDriver {
  hasRightAlignment(mockAlignment: Alignment): Promise<boolean>;
  isBoldBackground(): Promise<boolean>;
  isBoldTitle(): Promise<boolean>;
  isStretched(): Promise<boolean>;
  isCurrentDay(): Promise<boolean>;
}

export const calendarCellDriverFactory = (
  base: UniDriver,
): CalendarCellDriver => {
  return {
    ...baseUniDriverFactory(base),
    async isStretched() {
      return (await base.attr(CALENDAR_DATA_KEYS.Stertchable)) === 'true';
    },
    async isBoldTitle() {
      return (await base.attr(CALENDAR_DATA_KEYS.BoldTitle)) === 'true';
    },
    async isBoldBackground() {
      return (await base.attr(CALENDAR_DATA_KEYS.BoldBackground)) === 'true';
    },
    async isCurrentDay() {
      return (await base.attr(CALENDAR_DATA_KEYS.Current)) === 'true';
    },
    async hasRightAlignment(mockAlignment) {
      return (await base.attr(CALENDAR_DATA_KEYS.Alignment)) === mockAlignment;
    },
  };
};
