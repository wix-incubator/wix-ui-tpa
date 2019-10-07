import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { Simulate } from 'react-dom/test-utils';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { dropdownDriverFactory as coreDriverFactory } from 'wix-ui-core/dist/src/components/dropdown/Dropdown.driver';

import { hasMobile } from '../../test/utils';

export interface DropdownDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  areOptionsShown(): Promise<boolean>;
  getOptionsCount(): Promise<number>;
  selectOptionAt(index: number): Promise<void>;
}

const getCoreDriver = async (baseUniDriver: BaseUniDriver) => {
  const element = (await baseUniDriver.element()).querySelector(
    '[data-hook="core-dropdown"]',
  );
  return coreDriverFactory({ element, eventTrigger: Simulate });
};

export const dropdownDriverFactory = (base: UniDriver): DropdownDriver => {
  const baseUniDriver = baseUniDriverFactory(base);

  return {
    ...baseUniDriver,
    isMobile: () => hasMobile(base),
    click: async () => (await getCoreDriver(baseUniDriver)).click(),
    areOptionsShown: async () =>
      (await getCoreDriver(baseUniDriver)).isContentElementExists(),
    getOptionsCount: async () =>
      (await getCoreDriver(baseUniDriver)).getOptionsCount(),
    selectOptionAt: async (index: number) => {
      (await getCoreDriver(baseUniDriver)).optionAt(index).click();
    },
  };
};
