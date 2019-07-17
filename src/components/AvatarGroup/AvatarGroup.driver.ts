import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface AvatarGroupDriver extends BaseUniDriver {}

export const avatarGroupDriverFactory = (
  base: UniDriver,
): AvatarGroupDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
