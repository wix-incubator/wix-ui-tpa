import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { Simulate } from 'react-dom/test-utils';

import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { CHECKBOX_DATA_HOOKS, CHEKCBOX_DATA_KEYS } from './dataHooks';
export interface CheckboxDriver extends BaseUniDriver {
  hasError(): Promise<boolean>;
  hasDisabled(): Promise<boolean>;
  hasIndeterminate(): Promise<boolean>;
  hasChecked(): Promise<boolean>;
  clickOnCheckbox(): Promise<void>;
  hoverCheckbox(): Promise<void>;
  getBorderColor(): Promise<string>;
}

export const checkboxDriverFactory = (base: UniDriver): CheckboxDriver => {
  const checkboxDatahook = `[data-hook="${CHECKBOX_DATA_HOOKS.CheckboxWrapper}"]`;
  const iconDatahook = `[data-hook="${CHECKBOX_DATA_HOOKS.IconWrapper}"]`;

  const getIcon = (): UniDriver => base.$(`${iconDatahook}`);

  return {
    ...baseUniDriverFactory(base),
    async hasError() {
      return (await base.attr(CHEKCBOX_DATA_KEYS.Error)) === 'true';
    },
    async hasDisabled() {
      return (await base.attr(CHEKCBOX_DATA_KEYS.Disabled)) === 'true';
    },
    async hasIndeterminate() {
      return (await base.attr(CHEKCBOX_DATA_KEYS.Indeterminate)) === 'true';
    },
    async hasChecked() {
      return (await base.attr(CHEKCBOX_DATA_KEYS.Checked)) === 'true';
    },
    async clickOnCheckbox() {
      const inputNative = await base.$(`${checkboxDatahook} input`).getNative();

      return Simulate.change(inputNative);
    },
    async hoverCheckbox() {
      return new Promise(async (done) => {
        await base.$(`${iconDatahook}`).hover();
        // wait for transition to end
        setTimeout(done, 200);
      });
    },
    async getBorderColor() {
      const icon = getIcon();
      const native = await icon.getNative();

      return native.getCssValue('border-color');
    },
  };
};
