import {
  BaseUniDriver,
  baseUniDriverFactory,
  StylableUnidriverUtil,
  UniDriver,
} from 'wix-ui-test-utils/unidriver';
import * as style from './OverlappingCard.st.css';

export interface OverlappingCardDriver extends BaseUniDriver {
  getMediaContent(): Promise<HTMLElement>;
  getInfoContent(): Promise<HTMLElement>;
  getRatio(): Promise<string>;
  isFlippedRatio(): Promise<boolean>;
  isImagePositionInverted(): Promise<boolean>;
  isMediaContentExist(): Promise<boolean>;
  isInfoContentExist(): Promise<boolean>;
}

export const overlappingCardDriverFactory = (
  base: UniDriver,
): OverlappingCardDriver => {
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
  };
};
