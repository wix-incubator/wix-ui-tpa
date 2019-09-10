import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import {
  TextButtonDriver,
  textButtonDriverFactory,
} from '../TextButton/TextButton.driver';

export interface AvatarGroupDriver extends BaseUniDriver {
  getAvatarCount(): Promise<number>;
  textLink: TextButtonDriver;
}

export const avatarGroupDriverFactory = (
  base: UniDriver,
): AvatarGroupDriver => {
  const getAvatarCount = () => base.$$(`[data-hook="avatar"]`).count();
  const textLink = textButtonDriverFactory(base.$(`[data-hook="text-link"]`));
  return {
    ...baseUniDriverFactory(base),
    getAvatarCount,
    textLink,
  };
};
