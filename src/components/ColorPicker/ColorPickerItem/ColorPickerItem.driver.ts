import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import * as style from './ColorPickerItem.st.css';
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
  // const stylableDOMUtil = new StylableUnidriverUtil(style);
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
      /*console.log(
        "Elem",
        await base.$(`[data-hook="${colorPickerItemDataHook}"]`).value()
      );*/
      return (await getCoreRadioButtonDriver()).isDisabled();
      return (
        (await base
          .$(`[data-hook="${colorPickerItemDataHook}"]`)
          .attr('disabled')) !== null
      );
      // return !!(await stylableDOMUtil.getStyleState(base, "isCrossedOut"));
    },
    getTooltipText: async () => {
      const tooltipDriver = await getTooltipDriver();
      return tooltipDriver.getTooltipText();

      /*const tooltipDriver = await getTooltipDriver();
      tooltipDriver.mouseEnter();
      return tooltipDriver.getContentElement().innerHTML;*/
    },
    isTooltipExist: async () => {
      const tooltipDriver = await getTooltipDriver();
      return tooltipDriver.exists();
    },
  };
};
