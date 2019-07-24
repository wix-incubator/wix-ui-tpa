import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { UniDriverList } from '@unidriver/core';
import { RATINGS_DATA_HOOKS, RATINGS_DATA_KEYS } from './dataHooks';

export interface RatingsDriver extends BaseUniDriver {
  getStars(): Promise<number>;
  getActiveStars(): Promise<number>;
  getHoveredStars(): Promise<number>;
  clickOnStar(idx: number): Promise<void>;
  hoverStar(idx: number): Promise<void>;
  hasError(): Promise<boolean>;
  hasLargeMode(): Promise<boolean>;
  hasDisabled(): Promise<boolean>;
}

export const ratingsDriverFactory = (base: UniDriver): RatingsDriver => {
  const iconDatahook = `[data-hook="${RATINGS_DATA_HOOKS.IconWrapper}"]`;
  const filledColor = 'rgb(0, 185, 232)';

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
      return (await base.attr(RATINGS_DATA_KEYS.Error)) === 'true';
    },
    async hasDisabled() {
      return (await base.attr(RATINGS_DATA_KEYS.Disabled)) === 'true';
    },
    async hasLargeMode() {
      return (await base.attr(RATINGS_DATA_KEYS.IconSize)) === 'large';
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
