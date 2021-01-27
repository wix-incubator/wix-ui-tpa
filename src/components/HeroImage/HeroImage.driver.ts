import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { ImageDriver, imageDriverFactory } from '../Image/Image.driver';

export interface HeroImageDriver extends ImageDriver {}

export const heroImageDriverFactory = (base: UniDriver): ImageDriver => {
  const imageDriver = imageDriverFactory(base.$('img'));

  return {
    ...imageDriver,
  };
};
