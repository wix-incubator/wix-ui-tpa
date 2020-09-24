import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

import { modalDriverFactory } from '../Modal/Modal.driver';
import { iconButtonDriverFactory } from '../IconButton/IconButton.driver';

export interface DialogDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  isDialogOpen(): Promise<boolean>;
  childExists(predicate: string): Promise<boolean>;
  clickOnCloseButton(): Promise<void>;
}

export const dialogDriverFactory = (base: UniDriver): DialogDriver => {
  return {
    ...baseUniDriverFactory(base),

    /**
     * Checks whether it is mobile
     * @returns {Promise<boolean>}
     */
    isMobile: async () => (await base.attr('data-mobile')) === 'true',

    /**
     *  Checks whether the dialog is open
     *  @returns {Promise<boolean>}
     */
    isDialogOpen: async () => {
      const modalDriver = modalDriverFactory(base);
      return modalDriver.isModalShowed();
    },

    /**
     * Checks whether a node with the provided predicate exist
     * @param {string} predicate - a predicate for the child node
     * @returns {Promise<boolean>}
     */
    childExists: async (predicate: string) => await base.$(predicate).exists(),

    /**
     * Clicks on close button
     * @return {Promise<void>}
     */
    clickOnCloseButton: async () => {
      const iconButtonDriver = iconButtonDriverFactory(base);
      await iconButtonDriver.click();
    },
  };
};
