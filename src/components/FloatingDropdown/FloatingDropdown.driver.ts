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
  getAriaExpanded(): Promise<string>;
}

type LocalDriver = Omit<FloatingDropdownDriver, 'exists' | 'click' | 'element'>;

export const floatingDropdownDriverFactory = (
  base: UniDriver,
): FloatingDropdownDriver => {
  const baseUniDriver = baseUniDriverFactory(base);

  const isMobile = async () => (await base.attr('data-mobile')) === 'true';

  const getDropdownBase = async () => {
    return base.$(selectorFromDataHook(DATA_HOOKS.base));
  };

  const getDropdownFloatingButton = async () => {
    return base.$(selectorFromDataHook(DATA_HOOKS.floatingDropdownButton));
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

  const defaultDriver = (): LocalDriver => ({
    clickOnDropdownBase: async () => (await getDropdownBase()).click(),
    selectOptionAt: async (index: number) => {
      (await getDropdownCoreDriver()).optionAt(index).click();
    },
    dropdownContentDisplayed,
    getBaseSelectedValue: async () => {
      return (await getDropdownBase())
        .$(selectorFromDataHook(DATA_HOOKS.baseSelectedValue))
        .text();
    },
    getAriaExpanded: async () => {
      return (await getDropdownFloatingButton()).attr('aria-expanded');
    },
  });

  const getNativeProp = async (prop: string) => {
    return (await getDropdownBase())
      .$(selectorFromDataHook(DATA_HOOKS.nativeSelect))
      ._prop(prop);
  };

  const nativeDriver = (): LocalDriver => ({
    clickOnDropdownBase: async () => (await getDropdownBase()).click(),
    selectOptionAt: async () => {},
    dropdownContentDisplayed: async () => false,
    getBaseSelectedValue: async () => {
      const selectedIndex = await getNativeProp('selectedIndex');
      const options = await getNativeProp('options');
      return options[selectedIndex]?.text;
    },
    getAriaExpanded: async () =>
      (await getDropdownFloatingButton()).attr('aria-expanded'),
  });

  const getDriver = async (): Promise<LocalDriver> =>
    (await isMobile()) ? nativeDriver() : defaultDriver();

  return {
    ...baseUniDriver,
    clickOnDropdownBase: async () => (await getDriver()).clickOnDropdownBase(),
    dropdownContentDisplayed: async () =>
      (await getDriver()).dropdownContentDisplayed(),
    selectOptionAt: async (index: number) =>
      (await getDriver()).selectOptionAt(index),
    getBaseSelectedValue: async () =>
      (await getDriver()).getBaseSelectedValue(),
    getAriaExpanded: async () => (await getDriver()).getAriaExpanded(),
  };
};

function selectorFromDataHook(dataHook) {
  return `[data-hook="${dataHook}"]`;
}
