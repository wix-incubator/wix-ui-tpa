import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Grid.st.css';

export interface gridDriver extends BaseUniDriver {
  isDividerWidth(dividerWidth): Promise<boolean>;
  isItemsPerRow(itemsPerRow): Promise<boolean>;
  isItemMaxWidth(itemsPerRow): Promise<boolean>;
  isWithDivider(): Promise<boolean>;
  rowGap(withDivider?): Promise<string>;
  columnGap(): Promise<string>;
  rowSpan(index?): Promise<number>;
  columnSpan(index?): Promise<number>;
}

export const gridDriverFactory = (base: UniDriver): gridDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
    isItemsPerRow: async itemsPerRow => {
      return (await base.$('ul').attr('style')).includes(
        `repeat(${itemsPerRow},`,
      );
    },
    isItemMaxWidth: async itemMaxWidth => {
      return (await base.$('ul').attr('style')).includes(itemMaxWidth);
    },
    isWithDivider: async () => {
      return stylableUtil.hasStyleState(base, 'dividers');
    },
    isDividerWidth: async dividerWidth => {
      return (await base.$('style').text()).includes(`height: ${dividerWidth}`);
    },
    rowGap: async (withDivider = false) => {
      const gap = await base.$('ul').attr('style');
      return gap.match(
        withDivider ? /calc\([0-9]*px \+ [0-9]*px\)/g : /[0-9]*px/g,
      )[0];
    },
    columnGap: async () => {
      return (await base.$('ul').attr('style')).match(/[0-9]*px/g).pop();
    },
    rowSpan: async (index = 0) => {
      const gridRowEnd = (await base
        .$$('li')
        .get(index)
        .attr('style')).match(/grid-row-end: span [0-9]*/g)[0];
      return Number(gridRowEnd.match(/[0-9]+/g)[0]);
    },
    columnSpan: async (index = 0) => {
      const gridRowEnd = (await base
        .$$('li')
        .get(index)
        .attr('style')).match(/grid-column-end: span [0-9]*/g)[0];
      return Number(gridRowEnd.match(/[0-9]+/g)[0]);
    },
  };
};
