import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';
import { radioButtonDriverFactory } from 'wix-ui-core/dist/src/components/radio-button/RadioButton.driver';
import { Simulate } from 'react-dom/test-utils';
import {
  colorPickerItemDataHook,
  colorPickerItemTooltipDataHook,
} from '../dataHooks';

export interface ColorPickerItemDriver extends BaseUniDriver {
  isDisabled(): Promise<boolean>;
  getTooltipText(): Promise<string>;
  isTooltipExist(): Promise<boolean>;
}

export const colorPickerItemDriverFactory = (
  base: UniDriver,
): ColorPickerItemDriver => {
  const baseUniDriver = baseUniDriverFactory(base);
  const getTooltipDriver = async () => {
    const element = (await baseUniDriver.element()).querySelector(
      `[data-hook=${colorPickerItemTooltipDataHook}]`,
    );
    return tooltipDriverFactory({ element, eventTrigger: Simulate });
  };
  const getCoreRadioButtonDriver = async () => {
    const element = (await baseUniDriver.element()).querySelector(
      `[data-hook="${colorPickerItemDataHook}"]`,
    );
    return radioButtonDriverFactory({ element, eventTrigger: Simulate });
  };

  return {
    ...baseUniDriverFactory(base),
    isDisabled: async () => {
      return (await getCoreRadioButtonDriver()).isDisabled();
      return (
        (await base
          .$(`[data-hook="${colorPickerItemDataHook}"]`)
          .attr('disabled')) !== null
      );
    },
    getTooltipText: async () => {
      const tooltipDriver = await getTooltipDriver();
      return tooltipDriver.getTooltipText();
    },
    hasTooltip: async () => {
      const tooltipDriver = await getTooltipDriver();
      return tooltipDriver.exists();
    },
  };
};
