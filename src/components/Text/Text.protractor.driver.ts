import {
  BaseDriver,
  DriverFactory,
} from 'wix-ui-core/src/common/BaseDriver.protractor';

export interface TextDriver extends BaseDriver {
  getText(): Promise<string>;
  getTagName(): Promise<string>;
}

export const textDriverFactory: DriverFactory<TextDriver> = (component) => {
  return {
    /** returns the component element */
    element: () => component,
    /** returns the component text */
    getText: async () => component.getText(),
    /** returns the component tag name */
    getTagName: async () => component.getTagName(),
  };
};
