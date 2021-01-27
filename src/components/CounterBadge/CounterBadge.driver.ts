import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { COUNTER_BADGE_PRIORITY } from './CounterBadge';

const hasPriority = async (
  base: UniDriver,
  priority: COUNTER_BADGE_PRIORITY,
): Promise<boolean> => {
  const priorityVale = await base.attr('data-priority');
  return priorityVale === priority;
};

export interface CounterBadgeDriver extends BaseUniDriver {
  isPrimary(): Promise<boolean>;
  isSecondary(): Promise<boolean>;
  isDefault(): Promise<boolean>;
}

export const counterBadgeDriverFactory = (
  base: UniDriver,
): CounterBadgeDriver => {
  return {
    ...baseUniDriverFactory(base),
    isPrimary: () => hasPriority(base, COUNTER_BADGE_PRIORITY.primary),
    isSecondary: () => hasPriority(base, COUNTER_BADGE_PRIORITY.secondary),
    isDefault: () => hasPriority(base, COUNTER_BADGE_PRIORITY.default),
  };
};
