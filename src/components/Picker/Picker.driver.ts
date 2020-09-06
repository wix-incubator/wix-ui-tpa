import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { PICKER_DATA_HOOKS, PICKER_DATA_PROPS } from './dataHooks';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface PickerDriver extends BaseUniDriver {
  clickOnNext(): Promise<void>;
  clickOnPrev(): Promise<void>;
  hasDisablePrev(): Promise<boolean>;
  hasDisableNext(): Promise<boolean>;
  getNextAriaLabel(): Promise<string | undefined>;
  getPrevAriaLabel(): Promise<string | undefined>;
}

function arrowButton(base: UniDriver, arrowType) {
  return base.$(`[data-hook="${PICKER_DATA_HOOKS[arrowType]}"]`);
}

export const pickerDriverFactory = (base: UniDriver): PickerDriver => {
  return {
    ...baseUniDriverFactory(base),
    clickOnNext: () => arrowButton(base, 'Next').click(),
    clickOnPrev: () => arrowButton(base, 'Prev').click(),
    async hasDisableNext() {
      return (await base.attr(PICKER_DATA_PROPS.NextDisabled)) === 'true';
    },
    async hasDisablePrev() {
      return (await base.attr(PICKER_DATA_PROPS.PrevDisabled)) === 'true';
    },
    async getNextAriaLabel() {
      return base.$(`[data-hook=${PICKER_DATA_HOOKS.Next}]`).attr('aria-label');
    },
    async getPrevAriaLabel() {
      return base.$(`[data-hook=${PICKER_DATA_HOOKS.Prev}]`).attr('aria-label');
    },
  };
};
