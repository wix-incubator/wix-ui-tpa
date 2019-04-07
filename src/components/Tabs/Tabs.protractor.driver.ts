import {
  BaseDriver,
  DriverFactory,
} from 'wix-ui-core/src/common/BaseDriver.protractor';

export const tabsDriverFactory: DriverFactory<BaseDriver> = component => {
  return {
    /** returns the component element */
    element: () => component,
  };
};
