import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { PICKER_DATA_HOOKS } from './dataHooks';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface PickerDriver extends BaseUniDriver {
  clickOnNext(): Promise<void>;
  clickOnPrev(): Promise<void>;
}

function arrowButton(base: UniDriver, arrowType) {
  return base.$(`[data-hook="${PICKER_DATA_HOOKS[arrowType]}"]`);
}

export const pickerDriverFactory = (base: UniDriver): PickerDriver => {
  return {
    ...baseUniDriverFactory(base),
    clickOnNext: () => arrowButton(base, 'Next').click(),
    clickOnPrev: () => arrowButton(base, 'Prev').click(),
  };
};
