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
}

export const floatingDropdownDriverFactory = (
  base: UniDriver,
): FloatingDropdownDriver => {
  const baseUniDriver = baseUniDriverFactory(base);

  const getDropdownBase = async () => {
    return base.$$(`[data-hook="${DATA_HOOKS.base}"]`).get(0);
  };

  const getDropdownCoreDriver = async () => {
    const element = (await baseUniDriver.element()).querySelector(
      `[data-hook="${DATA_HOOKS.coreDropdown}"]`,
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
  };
};
