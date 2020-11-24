import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { UniDriverList } from '@unidriver/core';
import { RATINGS_DATA_HOOKS, RATINGS_DATA_KEYS } from './dataHooks';

export interface RatingsDriver extends BaseUniDriver {
  getStars(): Promise<number>;
  getActiveStar(): Promise<string>;
  getHoveredStars(): Promise<number>;
  clickOnStar(idx: number): Promise<void>;
  hoverStar(idx: number): Promise<void>;
  hasError(): Promise<boolean>;
  hasLargeMode(): Promise<boolean>;
  hasDisabled(): Promise<boolean>;
  getCurrentValueLabel(): Promise<string>;
  getHoveredLabelText(): Promise<string>;
  getRatingInfoText(): Promise<string>;
}

export const ratingsDriverFactory = (base: UniDriver): RatingsDriver => {
  const iconDatahook = `[data-hook="${RATINGS_DATA_HOOKS.IconWrapper}"]`;
  const inputOptionDatahook = `[data-hook="${RATINGS_DATA_HOOKS.InputOption}"]`;
  const inputOptionCurrentDatahook = `[data-hook="${RATINGS_DATA_HOOKS.InputOptionCurrent}"]`;
  const ratingInfoDatahook = `[data-hook="${RATINGS_DATA_HOOKS.RatingInfo}"]`;

  const getStarInput = (idx: number): UniDriver =>
    base.$$(`${iconDatahook}`).get(idx);

  const getLabel = (): UniDriver => base.$(inputOptionDatahook);

  return {
    ...baseUniDriverFactory(base),
    async getStars() {
      return base.$$(iconDatahook).count();
    },
    async getActiveStar() {
      return base.$(`${iconDatahook} input[checked]`).value();
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
      return (await base.attr(RATINGS_DATA_KEYS.Size)) === 'large';
    },
    async hoverStar(idx) {
      return getStarInput(idx - 1).hover();
    },
    async getHoveredStars() {
      const hoveredCount = await base.attr(RATINGS_DATA_KEYS.Hovered);

      return +hoveredCount;
    },
    async getHoveredLabelText() {
      const label = getLabel();

      return label.text();
    },
    async getCurrentValueLabel() {
      return base.$(inputOptionCurrentDatahook).text();
    },
    async getRatingInfoText() {
      return base.$(ratingInfoDatahook).text();
    },
  };
};
