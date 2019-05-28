import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './ListCard.st.css';

export interface listCardDriver extends BaseUniDriver {
  isItemsPerRow(itemsPerRow): Promise<boolean>;
  isItemMaxWidth(itemsPerRow): Promise<boolean>;
  isWithDivider(): Promise<boolean>;
}

export const listCardDriverFactory = (base: UniDriver): listCardDriver => {
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
      return stylableUtil.hasStyleState(base.$(`.${style.root}`), 'dividers')
    }
  };
};
