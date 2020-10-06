import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

// @ts-ignore
import { addItemUniDriverFactory as WSRAddItemUniDriverFactory } from 'wix-style-react/dist/src/AddItem/AddItem.uni.driver';

export interface AddItemDriver extends BaseUniDriver {
  hover(): Promise<void>;
  getText(): Promise<string>;
  textExists(): Promise<boolean>;
}

export const addItemDriverFactory = (base: UniDriver, body: UniDriver): AddItemDriver => {
  const WSRAddItemDriver =
      WSRAddItemUniDriverFactory(base, body);

  return {
    ...baseUniDriverFactory(base),

    hover: async () => base.hover(),

    /**
     * Gets AddItem text
     * @return {Promise<string>}
     */
    getText: async () => await WSRAddItemDriver.getText(),

    /**
     * Checks whether AddItem text exist
     * @returns {Promise<boolean>}
     */
    textExists: async () => {
      console.log('WSRAddItemDriver = ', WSRAddItemDriver);
      console.log('WSRAddItemDriver.exists() = ', await WSRAddItemDriver.exists());
      console.log('WSRAddItemDriver.textExists() = ', await WSRAddItemDriver.textExists());
      return await WSRAddItemDriver.textExists();
    },
  };
};
