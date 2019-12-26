import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ProGalleryDriver extends BaseUniDriver {
  clickOnArrow(): Promise<void>;

  getArrowsShown(): Promise<string>;

  clickOnArrowBack(): Promise<void>;

  getContainerShown(): Promise<string>;

  getGallerIdShown(): Promise<string>;

  getInnerHTML(): Promise<string>;
}

export const proGalleryDriverFactory = (base: UniDriver): ProGalleryDriver => {
  // const hasArrows = async (direction: string) => {
  //   const dataHookOfButton = `button[data-hook='nav-arrow-${direction}']`;
  //
  //   const hasArrowElement = await base.$(dataHookOfButton);
  //   return !!hasArrowElement;
  // };
  // const clickOnArrow = async (direction: string) => {
  //   const dataHookOfButton = `button[data-hook='nav-arrow-${direction}']`;
  //   await base.$(dataHookOfButton).click();
  // };
  return {
    ...baseUniDriverFactory(base),
    getArrowsShown: () => base.attr("[data-hook='nav-arrow-next']"),
    getContainerShown: () => base.attr('#pro-gallery-container'),
    getGallerIdShown: () => base.attr('#pro-gallery-1618'),
    clickOnArrow: () => base.$("[data-hook='nav-arrow-next']").click(),
    clickOnArrowBack: () => base.$("[data-hook='nav-arrow-back']").click(),
    getInnerHTML: () => base._prop('innerHTML'),
  };
};
