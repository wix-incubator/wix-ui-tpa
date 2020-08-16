import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { Simulate } from 'react-dom/test-utils';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { RADIOBUTTON_DATA_HOOKS, RADIOBUTTON_DATA_KEYS } from './dataHooks';

export interface RadioButtonDriver extends BaseUniDriver {
  isChecked(): Promise<boolean>;
  isDisabled(): Promise<boolean>;
  click(): Promise<void>;
}

export const radioButtonDriverFactory = (
  base: UniDriver,
): RadioButtonDriver => {
  return {
    ...baseUniDriverFactory(base),
    async isChecked() {
      return (await base.attr(RADIOBUTTON_DATA_KEYS.Checked)) === 'true';
    },
    async isDisabled() {
      return (await base.attr(RADIOBUTTON_DATA_KEYS.Disabled)) === 'true';
    },
    async click() {
      const radioButtonDatahook = `[data-hook="${RADIOBUTTON_DATA_HOOKS.RadioButtonWrapper}"]`;
      const inputNative = await base
        .$(`${radioButtonDatahook} input`)
        .getNative();
      return Simulate.change(inputNative);
    },
  };
};
