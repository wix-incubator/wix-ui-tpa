import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { DATA_HOOKS } from './constants';

// @ts-ignore
import { addItemUniDriverFactory as WSRAddItemUniDriverFactory } from 'wix-style-react/dist/src/AddItem/AddItem.uni.driver';

export interface AddItemDriver extends BaseUniDriver {
  getText(): Promise<string>;
  click(): Promise<void>;
}

export const addItemDriverFactory = (
  base: UniDriver,
  body: UniDriver,
): AddItemDriver => {
  const wsrAddItemNode = base.$(`[data-hook="${DATA_HOOKS.ADD_ITEM}"]`);
  const WSRAddItemDriver = WSRAddItemUniDriverFactory(wsrAddItemNode, body);

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets AddItem text
     * @return {Promise<string>}
     */
    getText: async () => base.$(`[data-hook="${DATA_HOOKS.TEXT}"]`).text(),

    /**
     * Click on the AddItem Button
     * @return {Promise<void>}
     */
    click: async () => WSRAddItemDriver.click(),
  };
};
