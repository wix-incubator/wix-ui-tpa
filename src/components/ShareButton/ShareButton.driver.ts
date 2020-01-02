import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ShareButtonDriver extends BaseUniDriver {}

export const shareButtonDriverFactory = (
  base: UniDriver,
): ShareButtonDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
