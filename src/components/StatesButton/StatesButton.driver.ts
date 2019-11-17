import {
  ButtonNextDriver,
  buttonNextDriverFactory,
} from 'wix-ui-core/dist/src/components/button-next/button-next.uni.driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './StatesButton.st.css';

export interface StatesButtonDriver extends ButtonNextDriver {
  checkIconExists(): Promise<boolean>;
}

export const statesButtonDriverFactory = (
  base: UniDriver,
): StatesButtonDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...buttonNextDriverFactory(base),
    checkIconExists: () => base.$('[data-hook="checkIcon"]').exists(),
  };
};
