import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ProGalleryDriver extends BaseUniDriver {

}

export const proGalleryDriverFactory = (base: UniDriver): ProGalleryDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
