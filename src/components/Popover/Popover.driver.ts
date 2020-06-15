import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { POPOVER_DATA_KEYS } from './dataHooks';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface PopoverDriver extends BaseUniDriver {
  withArrowTop(): Promise<boolean>;
  withTitle(): Promise<boolean>;
  isRightArrow(): Promise<boolean>;
  withShadow(): Promise<boolean>;
  withArrow(): Promise<boolean>;
  hasShown(): Promise<boolean>;
  hasAnimation(): Promise<boolean>;
}

export const popoverDriverFactory = (base: UniDriver): PopoverDriver => {
  return {
    ...baseUniDriverFactory(base),
    async withArrow() {
      return (await base.attr(POPOVER_DATA_KEYS.WithArrow)) === 'true';
    },
    async withShadow() {
      return (await base.attr(POPOVER_DATA_KEYS.WithShadow)) === 'true';
    },
    async isRightArrow() {
      return (await base.attr(POPOVER_DATA_KEYS.ArrowSide)) === 'right';
    },
    async withTitle() {
      return (await base.attr(POPOVER_DATA_KEYS.Title)) === 'title';
    },
    async withArrowTop() {
      return (await base.attr(POPOVER_DATA_KEYS.ArrowTop)) === '50';
    },
    async hasShown() {
      return (await base.attr(POPOVER_DATA_KEYS.Shown)) === 'true';
    },
    async hasAnimation() {
      return (await base.attr(POPOVER_DATA_KEYS.Animated)) === 'true';
    },
  };
};
