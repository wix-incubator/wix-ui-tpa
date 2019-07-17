import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './AvatarGroup.st.css';

export interface AvatarGroupDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const avatarGroupDriverFactory = (base: UniDriver): AvatarGroupDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
  };
};
