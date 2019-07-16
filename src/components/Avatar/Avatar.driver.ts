import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface AvatarDriver extends BaseUniDriver {}

export const avatarDriverFactory = (base: UniDriver): AvatarDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
