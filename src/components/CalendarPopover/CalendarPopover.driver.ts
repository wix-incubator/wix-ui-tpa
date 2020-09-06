import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { POPOVER_DATA_KEYS } from './dataHooks';
import { Sides } from '.';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface CalendarPopoverDriver extends BaseUniDriver {
  hasArrowTop(arrowTop: number): Promise<boolean>;
  hasTitle(): Promise<boolean>;
  hasRightArrow(side: Sides): Promise<boolean>;
  hasShadow(): Promise<boolean>;
  hasArrow(): Promise<boolean>;
  hasShown(): Promise<boolean>;
  hasAnimation(): Promise<boolean>;
  hasManualFocus(): Promise<boolean>;
}

export const calendarPopoverDriverFactory = (
  base: UniDriver,
): CalendarPopoverDriver => {
  return {
    ...baseUniDriverFactory(base),
    async hasArrow() {
      return (await base.attr(POPOVER_DATA_KEYS.WithArrow)) === 'true';
    },
    async hasShadow() {
      return (await base.attr(POPOVER_DATA_KEYS.WithShadow)) === 'true';
    },
    async hasRightArrow(side: Sides) {
      return (await base.attr(POPOVER_DATA_KEYS.ArrowSide)) === side;
    },
    async hasTitle() {
      return (await base.attr(POPOVER_DATA_KEYS.Title)) === 'title';
    },
    async hasArrowTop(arrowTop: number) {
      return (await base.attr(POPOVER_DATA_KEYS.ArrowTop)) === `${arrowTop}`;
    },
    async hasShown() {
      return (await base.attr(POPOVER_DATA_KEYS.Shown)) === 'true';
    },
    async hasAnimation() {
      return (await base.attr(POPOVER_DATA_KEYS.Animated)) === 'true';
    },
    async hasManualFocus() {
      return (await base.attr(POPOVER_DATA_KEYS.ManualFocus)) === 'true';
    },
  };
};
