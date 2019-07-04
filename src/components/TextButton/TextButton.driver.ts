import {
  ButtonNextDriver,
  buttonNextDriverFactory,
} from 'wix-ui-core/drivers/unidriver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './TextButton.st.css';

export interface TextButtonDriver extends ButtonNextDriver {
  isMobile(): Promise<boolean>;
}

export const textButtonDriverFactory = (base: UniDriver): TextButtonDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...buttonNextDriverFactory(base),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
  };
};
