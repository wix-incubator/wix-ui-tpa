import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { DATA_HOOKS } from "./constants";

export interface AddItemDriver extends BaseUniDriver {
  getText(): Promise<string>;
}

export const addItemDriverFactory = (
  base: UniDriver,
  body: UniDriver,
): AddItemDriver => {

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets AddItem text
     * @return {Promise<string>}
     */
    getText: async () => base.$(`[data-hook="${DATA_HOOKS.TEXT}"]`).text(),
  };
};
