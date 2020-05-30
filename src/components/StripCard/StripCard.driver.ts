import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import * as style from './StripCard.st.css';

export interface StripCardDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  isMediaRounded(): Promise<boolean>;
  isWithSidePadding(): Promise<boolean>;
  getMediaContent(): Promise<HTMLElement>;
  getInfoContent(): Promise<HTMLElement>;
}

export const stripCardDriverFactory = (base: UniDriver): StripCardDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  const getInfoContainerElement = () =>
    base.$(`.${style.classes.infoContainer} > *`);
  const getMediaContainerElement = () =>
    base.$(`.${style.classes.mediaContainer} > *`);

  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
    getMediaContent: async () => getMediaContainerElement().getNative(),
    getInfoContent: async () => getInfoContainerElement().getNative(),
    isMediaRounded: async () => stylableUtil.hasStyleState(base, 'roundMedia'),
    isWithSidePadding: async () =>
      stylableUtil.hasStyleState(base, 'sidePadding'),
  };
};
