import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';

export interface SpinnerDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const spinnerDriverFactory = (base: UniDriver): SpinnerDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
