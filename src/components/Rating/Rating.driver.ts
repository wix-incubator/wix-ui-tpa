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
  hasError(): Promise<boolean>;
  hasLargeMode(): Promise<boolean>;
  hasDisabled(): Promise<boolean>;
}

export const ratingDriverFactory = (base: UniDriver): RatingDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
    async getStars() {
      return base.$$('[data-hook="icon-wrapper"]').count();
    },
    async getActiveStars() {
      return base.$$('[data-hook="icon-wrapper"] input[checked]').count();
    },
    async clickOnStar(idx) {
      return base
        .$$('[data-hook="icon-wrapper"] input')
        .get(idx) // Rating index starts from 1
        .click();
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
  };
};
