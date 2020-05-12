import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import * as style from './Card.st.css';

export interface CardDriver extends BaseUniDriver {
  getMediaContent(): Promise<HTMLElement>;
  getInfoContent(): Promise<HTMLElement>;
  getRatio(): Promise<string>;
  isFlippedRatio(): Promise<boolean>;
  isImagePositionInverted(): Promise<boolean>;
  isMediaContentExist(): Promise<boolean>;
  isInfoContentExist(): Promise<boolean>;
  isMobile(): Promise<boolean>;
}

export const cardDriverFactory = (base: UniDriver): CardDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  const getMediaContainerElement = () =>
    base.$(`.${style.classes.mediaContainer} > *`);
  const getInfoContainerElement = () =>
    base.$(`.${style.classes.infoContainer} > *`);

  return {
    ...baseUniDriverFactory(base),
    getMediaContent: async () => getMediaContainerElement().getNative(),
    isMediaContentExist: async () => getMediaContainerElement().exists(),
    getInfoContent: async () => getInfoContainerElement().getNative(),
    isInfoContentExist: async () => getInfoContainerElement().exists(),
    getRatio: async () => stylableUtil.getStyleState(base, 'ratio'),
    isFlippedRatio: async () =>
      stylableUtil.hasStyleState(base, 'flippedRatio'),
    isImagePositionInverted: async () =>
      stylableUtil.hasStyleState(base, 'invertInfoPosition'),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
  };
};
