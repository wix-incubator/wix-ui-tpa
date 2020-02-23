import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface TagsDriver extends BaseUniDriver {

}

export const tagsDriverFactory = (base: UniDriver): TagsDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
