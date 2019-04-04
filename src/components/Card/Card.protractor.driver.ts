import {
  BaseDriver,
  DriverFactory,
} from 'wix-ui-core/src/common/BaseDriver.protractor';

export interface CardDriver extends BaseDriver {}

export const cardDriverFactory: DriverFactory<CardDriver> = component => {
  return {
    /** returns the component element */
    element: () => component,
  };
};
