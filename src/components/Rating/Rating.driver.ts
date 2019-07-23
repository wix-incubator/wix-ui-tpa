import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Rating.st.css';

export interface RatingDriver extends BaseUniDriver {
  getStars(): Promise<number>;
  getActiveStars(): Promise<number>;
  clickOnStar(idx: number): Promise<void>;
  hoverStar(idx: number): Promise<void>;
  hasError(): Promise<boolean>;
  hasLargeMode(): Promise<boolean>;
  hasDisabled(): Promise<boolean>;
}

export const ratingDriverFactory = (base: UniDriver): RatingDriver => {
  const iconDatahook = '[data-hook="icon-wrapper"]';
  const stylableUtil = new StylableUnidriverUtil(style);

  const getStar = (idx: number): UniDriver =>
    base.$$(`${iconDatahook} input`).get(idx);

  return {
    ...baseUniDriverFactory(base),
    async getStars() {
      return base.$$(iconDatahook).count();
    },
    async getActiveStars() {
      return base.$$(`${iconDatahook} input[checked]`).count();
    },
    async clickOnStar(idx) {
      return getStar(idx).click();
    },
    async hasError() {
      return stylableUtil.hasStyleState(base, 'error');
    },
    async hasDisabled() {
      return stylableUtil.hasStyleState(base, 'disabled');
    },
    async hasLargeMode() {
      return stylableUtil.hasStyleState(base, 'iconSize', 'large');
    },
    async hoverStar(idx) {
      return getStar(idx).hover();
    },
  };
};
