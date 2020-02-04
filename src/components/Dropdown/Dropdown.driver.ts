import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { Simulate } from 'react-dom/test-utils';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { dropdownDriverFactory as coreDriverFactory } from 'wix-ui-core/dist/src/components/dropdown/Dropdown.driver';

import { hasDataAttr, hasMobile } from '../../test/utils';
import { DATA_HOOKS } from './constants';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.driver';

export interface DropdownDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  isDisabled(): Promise<boolean>;
  areOptionsShown(): Promise<boolean>;
  getOptionsCount(): Promise<number>;
  selectOptionAt(index: number): Promise<void>;
  hasError(): Promise<boolean>;
  hasErrorMessage(): Promise<boolean>;
  getErrorMessageContent(): Promise<string>;
  getDropdownCoreDriver(baseUniDriver: BaseUniDriver);
  getTooltipDriver(baseUniDriver: BaseUniDriver);
}

const getDropdownCoreDriver = async (baseUniDriver: BaseUniDriver) => {
  const element = (await baseUniDriver.element()).querySelector(
    `[data-hook="${DATA_HOOKS.coreDropdown}"]`,
  );
  return coreDriverFactory({ element, eventTrigger: Simulate });
};

const getTooltipDriver = async (baseUniDriver: BaseUniDriver) => {
  const element = (await baseUniDriver.element()).querySelector(
    `[data-hook="${DATA_HOOKS.errorTooltip}"]`,
  );
  return tooltipDriverFactory({ element, eventTrigger: Simulate });
};

export const dropdownDriverFactory = (base: UniDriver): DropdownDriver => {
  const baseUniDriver = baseUniDriverFactory(base);
  const getDropdownBase = async () => {
    return base.$$(`[data-hook="${DATA_HOOKS.base}"]`).get(0);
  };

  return {
    ...baseUniDriver,
    isMobile: () => hasMobile(base),
    isDisabled: async () =>
      (await (await getDropdownBase()).attr('disabled')) !== null,
    click: async () => (await getDropdownCoreDriver(baseUniDriver)).click(),
    areOptionsShown: async () =>
      (await getDropdownCoreDriver(baseUniDriver)).isContentElementExists(),
    getOptionsCount: async () =>
      (await getDropdownCoreDriver(baseUniDriver)).getOptionsCount(),
    selectOptionAt: async (index: number) => {
      (await getDropdownCoreDriver(baseUniDriver)).optionAt(index).click();
    },
    hasErrorMessage: async () =>
      (await getTooltipDriver(baseUniDriver)).exists(),
    hasError: async () =>
      hasDataAttr(await getDropdownBase(), 'dropdown-base-error', 'true'),
    getErrorMessageContent: async () => {
      const tooltipDriver = await getTooltipDriver(baseUniDriver);
      tooltipDriver.mouseEnter();
      return tooltipDriver.getContentElement().innerHTML;
    },
    getTooltipDriver,
    getDropdownCoreDriver,
  };
};
