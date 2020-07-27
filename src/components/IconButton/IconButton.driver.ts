import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface IconButtonDriver extends BaseUniDriver {}

export const iconButtonDriverFactory = (base: UniDriver): IconButtonDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
