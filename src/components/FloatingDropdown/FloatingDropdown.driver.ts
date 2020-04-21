import { Simulate } from 'react-dom/test-utils';

import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { dropdownDriverFactory as coreDriverFactory } from 'wix-ui-core/dist/src/components/dropdown/Dropdown.driver';

import { DATA_HOOKS } from './constants';

export interface FloatingDropdownDriver extends BaseUniDriver {
  dropdownContentDisplayed(): Promise<boolean>;
  clickOnDropdownBase(): Promise<void>;
  selectOptionAt(i: number): Promise<void>;
  getBaseSelectedValue(): Promise<string>;
}

export const floatingDropdownDriverFactory = (
  base: UniDriver,
): FloatingDropdownDriver => {
  const baseUniDriver = baseUniDriverFactory(base);

  const getDropdownBase = async () => {
    return base.$$(selectorFromDataHook(DATA_HOOKS.base)).get(0);
  };

  const getDropdownCoreDriver = async () => {
    const element = (await baseUniDriver.element()).querySelector(
      selectorFromDataHook(DATA_HOOKS.coreDropdown),
    );
    return coreDriverFactory({ element, eventTrigger: Simulate });
  };

  const dropdownContentDisplayed = async () => {
    return (await getDropdownCoreDriver()).dropdownContentDisplayed();
  };

  return {
    ...baseUniDriver,
    clickOnDropdownBase: async () => (await getDropdownBase()).click(),
    dropdownContentDisplayed,
    selectOptionAt: async (index: number) => {
      (await getDropdownCoreDriver()).optionAt(index).click();
    },
    getBaseSelectedValue: async () => {
      return (await getDropdownBase())
        .$(selectorFromDataHook(DATA_HOOKS.baseSelectedValue))
        .text();
    },
  };
};

function selectorFromDataHook(dataHook) {
  return `[data-hook="${dataHook}"]`;
}
