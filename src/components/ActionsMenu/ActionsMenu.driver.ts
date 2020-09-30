import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';

export interface ActionsMenuDriver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const actionsMenuDriverFactory = (base: UniDriver): ActionsMenuDriver => {
  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => (await base.attr('data-mobile')) === 'true',
  };
};
