import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface CalendarCellDriver extends BaseUniDriver {

}

export const calendarCellDriverFactory = (base: UniDriver): CalendarCellDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
