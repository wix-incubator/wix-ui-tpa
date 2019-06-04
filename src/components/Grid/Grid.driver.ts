import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Grid.st.css';
import { GridDataHooks, GridDataKeys } from './DataHooks';

export interface gridDriver extends BaseUniDriver {
  dividerWidth(): Promise<string>;
  itemsPerRow(): Promise<number>;
  maxColumnWidth(): Promise<string>;
  minColumnWidth(): Promise<string>;
  itemMaxWidth(): Promise<string>;
  isWithDivider(): Promise<boolean>;
  rowGap(): Promise<string>;
  columnGap(): Promise<string>;
  rowSpan(index?): Promise<number>;
  columnSpan(index?): Promise<number>;
}

export const gridDriverFactory = (base: UniDriver): gridDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  const listWrapperDriver = base.$(`[data-hook="${GridDataHooks.container}"]`);
  return {
    ...baseUniDriverFactory(base),
    itemsPerRow: async () => {
      return Number(await listWrapperDriver.attr(GridDataKeys.itemsPerRow));
    },
    maxColumnWidth: async () => {
      return listWrapperDriver.attr(GridDataKeys.maxColumnWidth);
    },
    minColumnWidth: async () => {
      return listWrapperDriver.attr(GridDataKeys.minColumnWidth);
    },
    itemMaxWidth: async () => {
      return listWrapperDriver.attr(GridDataKeys.itemMaxWidth);
    },
    isWithDivider: async () => {
      return stylableUtil.hasStyleState(base, 'dividers');
    },
    dividerWidth: async () => {
      return listWrapperDriver.attr(GridDataKeys.dividerWidth);
    },
    rowGap: async () => {
      return listWrapperDriver.attr(GridDataKeys.rowGap);
    },
    columnGap: async () => {
      return listWrapperDriver.attr(GridDataKeys.columnGap);
    },
    rowSpan: async (index = 0) => {
      return Number(
        await base
          .$$(`[data-hook="${GridDataHooks.item}"]`)
          .get(index)
          .attr(GridDataKeys.rowSpan),
      );
    },
    columnSpan: async (index = 0) => {
      return Number(
        await base
          .$$(`[data-hook="${GridDataHooks.item}"]`)
          .get(index)
          .attr(GridDataKeys.columnSpan),
      );
    },
  };
};
