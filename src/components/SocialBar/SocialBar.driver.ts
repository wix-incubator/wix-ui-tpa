import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface SocialBarDriver extends BaseUniDriver {}

export const socialBarDriverFactory = (base: UniDriver): SocialBarDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
