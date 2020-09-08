import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { EVENT_DATA_KEYS } from './dataHooks';

export interface EventDriver extends BaseUniDriver {
  isTimeShown(): Promise<boolean>;
  isSelected(): Promise<boolean>;
  isFullday(): Promise<boolean>;
  isButton(): Promise<boolean>;
  hasAriaHasPopup(): Promise<boolean>;
  hasAriaExpanded(): Promise<boolean>;
}

export const eventDriverFactory = (base: UniDriver): EventDriver => {
  return {
    ...baseUniDriverFactory(base),
    async isSelected() {
      return (await base.attr(EVENT_DATA_KEYS.IsSelected)) === 'true';
    },
    async isFullday() {
      return (await base.attr(EVENT_DATA_KEYS.IsFullDay)) === 'true';
    },
    async isTimeShown() {
      return (await base.attr(EVENT_DATA_KEYS.IsTimeShown)) === 'true';
    },
    async isButton() {
      return (await base._prop('tagName')).toLowerCase() === 'button';
    },
    async hasAriaHasPopup() {
      return (await base.attr(EVENT_DATA_KEYS.ARIA_Has_Popup)) === 'true';
    },
    async hasAriaExpanded() {
      return (await base.attr(EVENT_DATA_KEYS.ARIA_Expanded)) === 'true';
    },
  };
};
