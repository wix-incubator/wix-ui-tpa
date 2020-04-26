import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { RADIOBUTTON_DATA_KEYS } from './datahooks';

export interface RadioButtonDriver extends BaseUniDriver {
  hasChecked(): Promise<boolean>;
  hasDisabled(): Promise<boolean>;
}

export const radioButtonDriverFactory = (
  base: UniDriver,
): RadioButtonDriver => {
  return {
    ...baseUniDriverFactory(base),
    async hasChecked() {
      return (await base.attr(RADIOBUTTON_DATA_KEYS.Checked)) === 'true';
    },
    async hasDisabled() {
      return (await base.attr(RADIOBUTTON_DATA_KEYS.Disabled)) === 'true';
    },
  };
};
