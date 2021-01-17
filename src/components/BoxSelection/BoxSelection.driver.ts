import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import {
  BOX_SELECTION_DATA_ATTRIBUTES,
  BOX_SELECTION_DATA_HOOKS,
} from './dataHooks';

export interface BoxSelectionDriver extends BaseUniDriver {
  isChecked(): Promise<boolean>;
  isDisabled(): Promise<boolean>;
  isUnavailable(): Promise<boolean>;
  getOptionsCount(): Promise<number>;
  click(): Promise<void>;
}
export const boxSelectionDriverFactory = (
  base: UniDriver,
): BoxSelectionDriver => {
  const boxOptionDataHook = `[data-hook=${BOX_SELECTION_DATA_HOOKS.BOX_SELECTION_OPTION}]`;
  const boxOptionWrapperDataHook = `[data-hook=${BOX_SELECTION_DATA_HOOKS.BOX_SELECTION_OPTION_WRAPPER}]`;
  const getOption = async () => base.$('input').getNative();
  const getOptionWrapper = async () => base.$(boxOptionWrapperDataHook);
  return {
    ...baseUniDriverFactory(base),
    async getOptionsCount() {
      return base.$$(boxOptionDataHook).count();
    },
    async isChecked() {
      const option = await getOption();
      return option.checked;
    },
    async isDisabled() {
      const option = await getOption();
      return option.disabled;
    },
    async isUnavailable() {
      const optionWrapper = await getOptionWrapper();
      const unavailableAttr = await optionWrapper.attr('data-unavailable');
      return unavailableAttr === 'true';
    },
    async click() {
      const option = await getOption();
      if (!option.disabled) {
        await option.click();
      }
    },
  };
};
