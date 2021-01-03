import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { RADIOBUTTON_DATA_KEYS } from './dataHooks';

export interface RadioButtonDriver extends BaseUniDriver {
  isChecked(): Promise<boolean>;
  isDisabled(): Promise<boolean>;
  isFocused(): Promise<boolean>;
  clickInput(): Promise<void>;
  getInput(): Promise<HTMLInputElement>;
}

export const radioButtonDriverFactory = (
  base: UniDriver,
): RadioButtonDriver => {
  return {
    ...baseUniDriverFactory(base),
    async getInput() {
      return base.$('input').getNative();
    },
    async clickInput() {
      return base.$('input').click();
    },
    async isChecked() {
      return (await base.attr(RADIOBUTTON_DATA_KEYS.Checked)) === 'true';
    },
    async isDisabled() {
      return (await base.attr(RADIOBUTTON_DATA_KEYS.Disabled)) === 'true';
    },
    async isFocused() {
      return (await base.attr(RADIOBUTTON_DATA_KEYS.Focused)) === 'true';
    },
  };
};
