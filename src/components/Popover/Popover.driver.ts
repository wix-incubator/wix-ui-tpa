import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { POPOVER_DATA_KEYS } from './dataHooks';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface PopoverDriver extends BaseUniDriver {
  withArrowTop(): any;
  withTitle(): any;
  isRightArrow(): any;
  withShadow(): any;
  withArrow(): any;
}

export const popoverDriverFactory = (base: UniDriver): PopoverDriver => {
  return {
    ...baseUniDriverFactory(base),
    async withArrow() {
      return(await base.attr(POPOVER_DATA_KEYS.WithArrow)) === 'true';
    },
    async withShadow() {
      return (await base.attr(POPOVER_DATA_KEYS.WithShadow)) === 'true';
    },
    async isRightArrow() {
      return (await base.attr(POPOVER_DATA_KEYS.RightArrow)) === 'true';
    },
    async withTitle() {
      return (await base.attr(POPOVER_DATA_KEYS.Title)) === 'title';
    },
    async withArrowTop() {
      return (await base.attr(POPOVER_DATA_KEYS.ArrowTop)) === '50px';
    }
  };
};
