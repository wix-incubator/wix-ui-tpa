import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { CALENDAR_DATA_KEYS } from './dataHooks';
import { Alignment } from './CalendarCell';

export interface CalendarCellDriver extends BaseUniDriver {
  hasTimeType(timeType): Promise<boolean>;
  hasRightAlignment(mockAlignment: Alignment): Promise<boolean>;
  stretcheable(): Promise<boolean>;
  hasCurrent(): Promise<boolean>;
}

export const calendarCellDriverFactory = (
  base: UniDriver,
): CalendarCellDriver => {
  return {
    ...baseUniDriverFactory(base),
    async stretcheable() {
      return (await base.attr(CALENDAR_DATA_KEYS.Stertchable)) === 'true';
    },
    async hasTimeType(timeType) {
      return (await base.attr(CALENDAR_DATA_KEYS.TimeType)) === timeType;
    },
    async hasCurrent() {
      return (await base.attr(CALENDAR_DATA_KEYS.Current)) === 'true';
    },
    async hasRightAlignment(mockAlignment) {
      return (await base.attr(CALENDAR_DATA_KEYS.Alignment)) === mockAlignment;
    },
  };
};
