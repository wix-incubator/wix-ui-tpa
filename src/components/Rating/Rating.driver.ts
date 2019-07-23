import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Rating.st.css';
import { UniDriverList } from '@unidriver/core';

export interface RatingDriver extends BaseUniDriver {
  getStars(): Promise<number>;
  getActiveStars(): Promise<number>;
  getHoveredStars(): Promise<number>;
  clickOnStar(idx: number): Promise<void>;
  hoverStar(idx: number): Promise<void>;
  hasError(): Promise<boolean>;
  hasLargeMode(): Promise<boolean>;
  hasDisabled(): Promise<boolean>;
}

export const ratingDriverFactory = (base: UniDriver): RatingDriver => {
  const iconDatahook = '[data-hook="icon-wrapper"]';
  const filledColor = 'rgb(0, 185, 232)';
  const stylableUtil = new StylableUnidriverUtil(style);

  const getStarInput = (idx: number): UniDriver =>
    base.$$(`${iconDatahook} input`).get(idx);

  const getStarIcons = (): UniDriverList => base.$$(`${iconDatahook} svg path`);

  return {
    ...baseUniDriverFactory(base),
    async getStars() {
      return base.$$(iconDatahook).count();
    },
    async getActiveStars() {
      return base.$$(`${iconDatahook} input[checked]`).count();
    },
    async clickOnStar(idx) {
      return getStarInput(idx).click();
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
      return getStarInput(5 - idx).hover();
    },
    async getHoveredStars() {
      const icons = getStarIcons();

      const filtered = icons.filter(async icon => {
        const native = await icon.getNative();

        return (await native.getCssValue('fill')) === filledColor;
      });

      return filtered.count();
    },
  };
};
