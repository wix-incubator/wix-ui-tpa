import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { ImageDriver, imageDriverFactory } from '../Image/Image.driver';

export interface ThumbnailImageDriver extends ImageDriver {}

export const thumbnailImageDriverFactory = (base: UniDriver): ImageDriver => {
  const imageDriver = imageDriverFactory(base.$('img'));

  return {
    ...imageDriver,
  };
};
