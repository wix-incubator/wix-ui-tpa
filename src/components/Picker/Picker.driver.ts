import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { PICKER_DATA_KEYS } from './dataHooks';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface PickerDriver extends BaseUniDriver {
  isArrowsSizeSet(arrowsSized): Promise<boolean>;
  clickOnNext(): Promise<void>;
  clickOnPrev(): Promise<void>;
}

export const pickerDriverFactory = (base: UniDriver): PickerDriver => {
  const warnUnsupportedFunction = (fnName: string) => {
    console.warn(
      `Function ${fnName} is not supported within native picker mode.`,
    );
    return null;
  };
  return {
    ...baseUniDriverFactory(base),
    async isArrowsSizeSet(arrowsSized) {
      return (await base.attr(PICKER_DATA_KEYS.ArrowsSized)) === arrowsSized;
    },
    clickOnNext: async () => warnUnsupportedFunction('clickOnNext'),
    clickOnPrev: async () => warnUnsupportedFunction('clickOnPrev'),
  };
};
