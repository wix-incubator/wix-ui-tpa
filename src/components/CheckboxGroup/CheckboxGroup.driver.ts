import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { checkboxDriverFactory } from '../Checkbox/Checkbox.driver';
import { CHECKBOX_DATA_HOOKS } from '../Checkbox/dataHooks';

export interface CheckboxGroupDriver extends BaseUniDriver {
  isCheckboxesExist(): Promise<boolean>;
  isCheckboxesDisabled(): Promise<boolean>;
  isCheckboxesErrored(): Promise<boolean>;
}

export const checkboxGroupDriverFactory = (
  base: UniDriver,
): CheckboxGroupDriver => {
  const checkboxDriver = checkboxDriverFactory(base);
  const checkboxDatahook = `[data-hook="${CHECKBOX_DATA_HOOKS.CheckboxWrapper}"]`;

  return {
    ...baseUniDriverFactory(base),
    async isCheckboxesExist() {
      return checkboxDriver.exists();
    },
    async isCheckboxesDisabled() {
      const checkboxes = base.$$(checkboxDatahook);
      const filtered = checkboxes.filter(async (checkbox) => {
        const cd = checkboxDriverFactory(checkbox);

        return cd.hasDisabled();
      });

      return (await checkboxes.count()) === (await filtered.count());
    },
    async isCheckboxesErrored() {
      const checkboxes = base.$$(checkboxDatahook);
      const filtered = checkboxes.filter(async (checkbox) => {
        const cd = checkboxDriverFactory(checkbox);

        return cd.hasError();
      });

      return (await checkboxes.count()) === (await filtered.count());
    },
  };
};
