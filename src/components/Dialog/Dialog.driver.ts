import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { DATA_HOOKS } from './constants';

import { modalDriverFactory } from '../internal/Modal/Modal.driver';

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
      return modalDriver.isOpen();
    },

    /**
     * Checks whether a node with the provided predicate exist
     * @param {string} predicate - a predicate for the child node
     * @returns {Promise<boolean>}
     */
    childExists: async (predicate: string) => base.$(predicate).exists(),

    /**
     * Clicks on close button
     * @return {Promise<void>}
     */
    clickOnCloseButton: async () => {
      await base.$(`[data-hook=${DATA_HOOKS.CLOSE_BTN}]`).click();
    },
  };
};
