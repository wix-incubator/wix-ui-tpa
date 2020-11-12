import { mediaImageDriverFactory } from 'wix-ui-core/dist/src/components/media-image/media-image.driver';
import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ImageDriver extends BaseUniDriver {
  getSrc(): Promise<string>;
  getAlt(): Promise<string>;
}

export const imageDriverFactory = (base: UniDriver): ImageDriver => {
  const mediaImageDriver = mediaImageDriverFactory(base.$('img'));

  return {
    ...baseUniDriverFactory(base),
    getSrc: mediaImageDriver.getSrc,
    getAlt: mediaImageDriver.getAlt,
  };
};
