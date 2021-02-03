import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface TagDriver extends BaseUniDriver {
  clickRemoveButton(): Promise<void>;

  hasCloseIcon(): Promise<boolean>;
}

export const tagDriverFactory = (base: UniDriver): TagDriver => {
  return {
    ...baseUniDriverFactory(base),
    clickRemoveButton: () => base.click(),
    hasCloseIcon: () => base.$('[data-hook="remove-icon"]').exists(),
  };
};
