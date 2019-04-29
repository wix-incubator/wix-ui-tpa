import {
  ButtonNextDriver,
  buttonNextDriverFactory,
} from 'wix-ui-core/drivers/vanilla';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Button.st.css';

export interface ButtonDriver extends ButtonNextDriver {
  isFullWidth(): Promise<boolean>;
}

export const buttonDriverFactory = (base: UniDriver): ButtonDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...buttonNextDriverFactory(base),
    isFullWidth: async () => stylableUtil.hasStyleState(base, 'fullWidth'),
  };
};
