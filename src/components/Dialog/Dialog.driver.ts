import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';

export interface DialogDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const dialogDriverFactory = (base: UniDriver): DialogDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
