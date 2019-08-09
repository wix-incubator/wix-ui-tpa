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
  hoverCheckbox(): Promise<void>;
  getIconColor(): Promise<string>;
}

export const checkboxDriverFactory = (base: UniDriver): CheckboxDriver => {
  const checkboxDatahook = `[data-hook="${CHECKBOX_DATA_HOOKS.IconWrapper}"]`;
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
      return base.$(checkboxDatahook).click();
    },
    async hoverCheckbox() {
      return base.$(checkboxDatahook).hover();
    },
    async getIconColor() {
      const icon = getIcon();
      const native = await icon.getNative();

      return native.getCssValue('border-color');
    },
  };
};
