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
  textButton: TextButtonDriver;
}

export const avatarGroupDriverFactory = (
  base: UniDriver,
): AvatarGroupDriver => {
  const getAvatarCount = () => base.$$(`[data-hook="avatar"]`).count();
  const textButton = textButtonDriverFactory(
    base.$(`[data-hook="text-button"]`),
  );
  return {
    ...baseUniDriverFactory(base),
    getAvatarCount,
    textButton,
  };
};
