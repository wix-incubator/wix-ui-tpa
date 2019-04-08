import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Card.st.css';

export interface CardDriver extends BaseUniDriver {
  getMediaContent(): Promise<string>;
  getInfoContent(): Promise<string>;
  getRatio(): Promise<string>;
  hasFlippedRatioState(): Promise<boolean>;
  hasInvertImagePositionState(): Promise<boolean>;
}

export const cardDriverFactory = (base: UniDriver): CardDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  const getMediaContainerElement = () => base.$(`.${style.mediaContainer}`);
  const getInfoContainerElement = () => base.$(`.${style.infoContainer}`);

  return {
    ...baseUniDriverFactory(base),
    getMediaContent: async () =>
      (await getMediaContainerElement().getNative()).innerHTML,
    getInfoContent: async () =>
      (await getInfoContainerElement().getNative()).innerHTML,
    getRatio: async () => stylableUtil.getStyleState(base, 'ratio'),
    hasFlippedRatioState: async () =>
      stylableUtil.hasStyleState(base, 'flippedRatio'),
    hasInvertImagePositionState: async () =>
      stylableUtil.hasStyleState(base, 'invertInfoPosition'),
  };
};
