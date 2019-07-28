import {
  ButtonNextDriver,
  buttonNextDriverFactory,
} from 'wix-ui-core/drivers/unidriver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface StatesButtonDriver extends ButtonNextDriver {
  checkIconExists(): Promise<boolean>;
}

export const statesButtonDriverFactory = (
  base: UniDriver,
): StatesButtonDriver => {
  return {
    ...buttonNextDriverFactory(base),
    checkIconExists: () => base.$('[data-hook="checkIcon"]').exists(),
  };
};
