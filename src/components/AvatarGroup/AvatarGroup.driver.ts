import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface AvatarGroupDriver extends BaseUniDriver {
  getAvatarCount(): Promise<number>;
}

export const avatarGroupDriverFactory = (
  base: UniDriver,
): AvatarGroupDriver => {
  const getAvatarCount = () => base.$$(`[data-hook="avatar"]`).count();
  return {
    ...baseUniDriverFactory(base),
    getAvatarCount,
  };
};
