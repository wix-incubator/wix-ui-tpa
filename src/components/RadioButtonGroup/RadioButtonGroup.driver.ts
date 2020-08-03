import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { radioButtonDriverFactory } from '../RadioButton/RadioButton.driver';

export interface RadioButtonGroupDriver extends BaseUniDriver {
  isRadioButtonsExists(): Promise<boolean>;
}

export const radioButtonGroupDriverFactory = (
  base: UniDriver,
): RadioButtonGroupDriver => {
  const radiobuttonDriver = radioButtonDriverFactory(base);
  return {
    ...baseUniDriverFactory(base),
    async isRadioButtonsExists() {
      return radiobuttonDriver.exists();
    },
  };
};
