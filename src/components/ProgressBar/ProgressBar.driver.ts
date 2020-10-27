import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ProgressBarDriver extends BaseUniDriver {}

export const progressBarDriverFactory = (
  base: UniDriver,
): ProgressBarDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
