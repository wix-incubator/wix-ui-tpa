import { mediaImageDriverFactory } from 'wix-ui-core/dist/src/components/media-image/media-image.driver';
import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ImageDriver extends BaseUniDriver {
  getSrc(): Promise<string>;
  getAlt(): Promise<string>;
  isLoaded(): Promise<boolean>;
  isError(): Promise<boolean>;
}

export const imageDriverFactory = (base: UniDriver): ImageDriver => {
  const { getSrc, getAlt, isLoaded, isError } = mediaImageDriverFactory(
    base.$('img'),
  );

  return {
    ...baseUniDriverFactory(base),
    getSrc,
    getAlt,
    isLoaded,
    isError,
  };
};
