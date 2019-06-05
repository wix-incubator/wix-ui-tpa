import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { GridDataKeys } from '../DataHooks';

export interface itemDriver extends BaseUniDriver {
  rowSpan(): Promise<number>;
  columnSpan(): Promise<number>;
}

export const itemDriverFactory = (base: UniDriver): itemDriver => {
  return {
    ...baseUniDriverFactory(base),
    rowSpan: async () => {
      return Number(await base.attr(GridDataKeys.rowSpan));
    },
    columnSpan: async () => {
      return Number(await base.attr(GridDataKeys.columnSpan));
    },
  };
};
