import {
  ButtonNextDriver,
  buttonNextDriverFactory,
} from 'wix-ui-core/dist/src/components/button-next/button-next.uni.driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import * as style from './TextButton.st.css';
import { TEXT_BUTTON_PRIORITY } from './TextButton';

export interface TextButtonDriver extends ButtonNextDriver {
  isMobile(): Promise<boolean>;
  hasPriority(priority: TEXT_BUTTON_PRIORITY): Promise<boolean>;
}

export const textButtonDriverFactory = (base: UniDriver): TextButtonDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...buttonNextDriverFactory(base),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
    hasPriority: async (priority: TEXT_BUTTON_PRIORITY) =>
      (await stylableUtil.getStyleState(base, 'priority')) === priority,
  };
};
