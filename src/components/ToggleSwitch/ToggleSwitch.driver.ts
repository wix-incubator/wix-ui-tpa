import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ToggleSwitchDriver extends BaseUniDriver {
  click(): Promise<void>;
  isChecked(): Promise<boolean>;
  isDisabled(): Promise<boolean>;
  getId(): Promise<string>;
  getTabIndex(): Promise<string>;
}

export const toggleSwitchDriverFactory = (
  base: UniDriver,
): ToggleSwitchDriver => {
  const getInnerCheckbox = () => base.$('input').getNative();

  return {
    ...baseUniDriverFactory(base),
    /** Triggers change */
    click: async () => {
      const checkbox = await getInnerCheckbox();

      if (!checkbox.disabled) {
        await checkbox.click();
      }
    },
    /** Returns a boolean indicating if the toggleSwitch is checked */
    isChecked: async () => {
      const checkbox = await getInnerCheckbox();

      return checkbox.checked;
    },
    /** Returns a boolean indicating if the toggleSwitch is disabled */
    isDisabled: async () => {
      const checkbox = await getInnerCheckbox();

      return checkbox.disabled;
    },
    /** Returns the id of the input */
    getId: async () => {
      const checkbox = await getInnerCheckbox();

      return checkbox.id;
    },
    /** Returns the tab index */
    getTabIndex: async () => {
      const checkbox = await getInnerCheckbox();

      return checkbox.tabIndex;
    },
  };
};
