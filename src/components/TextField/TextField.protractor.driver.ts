import {
  inputDriverFactory,
  InputDriver,
} from 'wix-ui-core/drivers/protractor';

export interface TextFieldDriver extends InputDriver {
  hover();
}

export const textFieldDriverFactory = (component): TextFieldDriver => {
  return {
    ...inputDriverFactory(component),
    async hover() {
      const input = component.$('input');

      await component.browser_
        .actions()
        .mouseMove(await input.getWebElement())
        .perform();
    },
  };
};
