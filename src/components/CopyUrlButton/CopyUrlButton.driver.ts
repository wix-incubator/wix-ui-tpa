import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface CopyUrlButtonDriver extends BaseUniDriver {}

export const copyUrlButtonDriverFactory = (
  base: UniDriver,
): CopyUrlButtonDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
