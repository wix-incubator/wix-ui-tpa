import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './AvatarGroup.st.css';

export interface AvatarGroupDriver extends BaseUniDriver {
  getAvatarCount(): Promise<number>;
}

export const avatarGroupDriverFactory = (
  base: UniDriver,
): AvatarGroupDriver => {
  const getAvatarCount = () => base.$$(`.${style.root} > *`).count();
  return {
    ...baseUniDriverFactory(base),
    getAvatarCount,
  };
};
