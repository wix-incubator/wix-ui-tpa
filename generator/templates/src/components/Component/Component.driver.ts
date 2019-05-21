import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './{%ComponentName%}.st.css';

export interface {%ComponentName%}Driver extends BaseUniDriver {
  isMobile(): Promise<boolean>;
}

export const {%componentName%}DriverFactory = (base: UniDriver): {%ComponentName%}Driver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
    isMobile: async () => stylableUtil.hasStyleState(base, 'mobile'),
  };
};
