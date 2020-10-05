import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
// import { DATA_HOOKS } from './constants';
//
// import { AddItemTestkit } from 'wix-style-react/dist/testkit';

export interface AddItemDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  hover(): Promise<void>;
  // getText(): Promise<string>;
  // textExists(): Promise<boolean>;
}

export const addItemDriverFactory = (base: UniDriver): AddItemDriver => {
  // const WSRAddItemDriver = AddItemTestkit({
  //   wrapper: document.body,
  //   dataHook: DATA_HOOKS.None, // todo: Sivan: change it
  // });

  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',

    hover: async () => base.hover(),

    // /**
    //  * Gets AddItem text
    //  * @return {Promise<string>}
    //  */
    // getText: () => WSRAddItemDriver.getText(),
    //
    // /**
    //  * Checks whether AddItem text exist
    //  * @returns {Promise<boolean>}
    //  */
    // textExists: () => WSRAddItemDriver.textExists(),
  };
};
