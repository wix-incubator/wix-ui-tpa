import {
  ButtonNextDriver, //instead of BaseUniDriver
  buttonNextDriverFactory, //instead of baseUniDriverFactory
} from 'wix-ui-core/dist/src/components/button-next/button-next.uni.driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ButtonDriver extends ButtonNextDriver {
  isFullWidth(): Promise<boolean>;
  isMobile(): Promise<boolean>;
}

export const buttonDriverFactory = (base: UniDriver): ButtonDriver => {
  return {
    ...buttonNextDriverFactory(base),
    isFullWidth: async () => {
      const attr = await base.attr('data-fullwidth');
      return attr === 'true';
    },
    isMobile: async () => {
      const attr = await base.attr('data-mobile');
      return attr === 'true';
    },
  };
};
