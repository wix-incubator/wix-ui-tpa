import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';

import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { CHECKBOX_DATA_HOOKS, CHEKCBOX_DATA_KEYS } from './dataHooks';
export interface CheckboxDriver extends BaseUniDriver {
  hasError(): Promise<boolean>;
  hasDisabled(): Promise<boolean>;
  hasIndeterminate(): Promise<boolean>;
  hasChecked(): Promise<boolean>;
  clickOnCheckbox(): Promise<void>;
}

export const checkboxDriverFactory = (base: UniDriver): CheckboxDriver => {
  const checkboxDatahook = `[data-hook="${CHECKBOX_DATA_HOOKS.IconWrapper}"]`;

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
      return base.$(`${checkboxDatahook}`).click();
    },
  };
};
