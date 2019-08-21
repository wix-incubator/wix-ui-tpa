import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { checkboxDriverFactory } from '../Checkbox/Checkbox.driver';

export interface CheckboxGroupDriver extends BaseUniDriver {
  isCheckboxesExist(): Promise<boolean>;
}

export const checkboxGroupDriverFactory = (
  base: UniDriver,
): CheckboxGroupDriver => {
  const checkboxDriver = checkboxDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),
    async isCheckboxesExist() {
      return checkboxDriver.exists();
    },
  };
};
