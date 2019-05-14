import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './StripCard.st.css';

export interface stripCardDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
  isMediaRounded(): Promise<boolean>;
  getMediaContent(): Promise<HTMLElement>;
  getInfoContent(): Promise<HTMLElement>;
}

export const stripCardDriverFactory = (base: UniDriver): stripCardDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  const getInfoContainerElement = () => base.$(`.${style.infoContainer} > *`);
  const getMediaContainerElement = () => base.$(`.${style.mediaContainer} > *`);

  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
    getMediaContent: async () => getMediaContainerElement().getNative(),
    getInfoContent: async () => getInfoContainerElement().getNative(),
    isMediaRounded: async () =>
      stylableUtil.hasStyleState(base, 'roundMedia'),
  };
};
