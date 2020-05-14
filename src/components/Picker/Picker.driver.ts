import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { PICKER_DATA_KEYS } from './dataHooks';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface PickerDriver extends BaseUniDriver {
  isArrowsSizeSet(arrowsSized): Promise<boolean>;
}

export const pickerDriverFactory = (base: UniDriver): PickerDriver => {
  return {
    ...baseUniDriverFactory(base),
    async isArrowsSizeSet(arrowsSized) {
      return (await base.attr(PICKER_DATA_KEYS.ArrowsSized)) === arrowsSized;
    },
  };
};
