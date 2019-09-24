import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';

export interface DropdownDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const dropdownDriverFactory = (base: UniDriver): DropdownDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
