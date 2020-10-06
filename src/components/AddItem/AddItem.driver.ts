import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

// @ts-ignore
import { addItemUniDriverFactory as WSRAddItemUniDriverFactory } from 'wix-style-react/dist/src/AddItem/AddItem.uni.driver';

export interface AddItemDriver extends BaseUniDriver {
  hover(): Promise<void>;
  focus(): Promise<void>;
  getText(): Promise<string>;
  textExists(): Promise<boolean>;
}

export const addItemDriverFactory = (
  base: UniDriver,
  body: UniDriver,
): AddItemDriver => {
  const WSRAddItemDriver = WSRAddItemUniDriverFactory(base, body);

  return {
    ...baseUniDriverFactory(base),

    /**
     * Hover on the element
     * @returns {Promise<void>}
     */
    hover: async () => base.hover(),

    /**
     * Focus on the element
     * @returns {Promise<void>}
     */
    focus: async () => {}, // todo: Sivan Implement it

    /**
     * Gets AddItem text
     * @return {Promise<string>}
     */
    getText: async () => WSRAddItemDriver.getText(),

    /**
     * Checks whether AddItem text exist
     * @returns {Promise<boolean>}
     */
    textExists: async () => WSRAddItemDriver.textExists(),
  };
};
