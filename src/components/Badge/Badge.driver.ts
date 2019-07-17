import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Badge.st.css';

export interface BadgeDriver extends BaseUniDriver {
  isPrimary(): Promise<boolean>;
  isLight(): Promise<boolean>;
  isDefault(): Promise<boolean>;
}

export const badgeDriverFactory = (base: UniDriver): BadgeDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
    isPrimary: async () => stylableUtil.hasStyleState(base, 'primary'),
    isLight: async () => stylableUtil.hasStyleState(base, 'light'),
    isDefault: async () => !(await this.isPrimary()) && !(await this.isLight())
  };
};
