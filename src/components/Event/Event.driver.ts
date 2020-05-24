import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface EventDriver extends BaseUniDriver {}

export const eventDriverFactory = (base: UniDriver): EventDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
