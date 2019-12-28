import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ProGalleryDriver extends BaseUniDriver {
  clickOnArrow(direction: string): Promise<void>;
  getArrowsShown(): Promise<string>;
  getInnerHTML(): Promise<string>;
}

export const proGalleryDriverFactory = (base: UniDriver): ProGalleryDriver => {
  return {
    ...baseUniDriverFactory(base),
    getArrowsShown: () => base.attr("[data-hook='nav-arrow-next']"),
    clickOnArrow: (direction: string) =>
      base.$(`[data-hook='nav-arrow-${direction}']`).click(),
    getInnerHTML: () => base._prop('innerHTML'),
  };
};
