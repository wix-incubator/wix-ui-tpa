import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { BADGE_PRIORITY } from './Badge';

const hasPriority = async (
  base: UniDriver,
  priority: BADGE_PRIORITY,
): Promise<boolean> => {
  const priorityVale = await base.attr('data-priority');
  return priorityVale === priority;
};

const isIconExists = async (base: UniDriver): Promise<boolean> => {
  return !!base.$(`[data-hook=badge-icon] svg`);
};

export interface BadgeDriver extends BaseUniDriver {
  isPrimary(): Promise<boolean>;
  isLight(): Promise<boolean>;
  isDefault(): Promise<boolean>;
  hasIcon(): Promise<boolean>;
}

export const badgeDriverFactory = (base: UniDriver): BadgeDriver => {
  return {
    ...baseUniDriverFactory(base),
    isPrimary: () => hasPriority(base, BADGE_PRIORITY.primary),
    isLight: () => hasPriority(base, BADGE_PRIORITY.light),
    isDefault: () => hasPriority(base, BADGE_PRIORITY.default),
    hasIcon: () => isIconExists(base),
  };
};
