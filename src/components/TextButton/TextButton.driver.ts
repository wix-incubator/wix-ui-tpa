import {
  ButtonNextDriver,
  buttonNextDriverFactory,
} from 'wix-ui-core/drivers/unidriver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './TextButton.st.css';
import { TEXT_BUTTON_PRIORITY } from './TextButton';
import { StylableUnidriverUtilClass } from '../../test/utils';

export interface TextButtonDriver extends ButtonNextDriver {
  isMobile(): Promise<boolean>;
  hasPriority(priority: TEXT_BUTTON_PRIORITY): Promise<boolean>;
}

export const textButtonDriverFactory = (base: UniDriver): TextButtonDriver => {
  const stylableUtil = new StylableUnidriverUtil(
    style,
  ) as StylableUnidriverUtilClass;

  return {
    ...buttonNextDriverFactory(base),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
    hasPriority: async (priority: TEXT_BUTTON_PRIORITY) =>
      (await stylableUtil.getStyleState(base, 'priority')) === priority,
  };
};
