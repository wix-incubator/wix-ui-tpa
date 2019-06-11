import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import * as React from 'react';
import { StatesButton } from './StatesButton';
import { statesButtonDriverFactory } from './StatesButton.driver';

jest.useFakeTimers();

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe('StatesButton', () => {
  const createDriver = createUniDriverFactory(statesButtonDriverFactory);

  let onClickSpy;
  let defaultProps;

  beforeEach(() => {
    onClickSpy = jest.fn();

    defaultProps = {
      text: 'add to cart',
      onClick: onClickSpy,
      disabled: false,
    };
  });

  describe('default props', () => {
    let driver;
    let ref: React.RefObject<StatesButton>;

    beforeEach(() => {
      ref = React.createRef();
      driver = createDriver(<StatesButton {...defaultProps} ref={ref} />);
    });

    it('should render text from "text" prop', async () => {
      expect(await driver.getButtonTextContent()).toEqual('add to cart');
    });

    it('should call "onClick" callback when clicking and show success icon after "onActionSuccess" was called, then after 2 seconds return to normal text', async () => {
      onClickSpy.mockImplementation(() => Promise.resolve());
      expect(onClickSpy).not.toHaveBeenCalled();
      await driver.click();
      expect(onClickSpy).toHaveBeenCalled();
      expect(await driver.checkIconExists()).toEqual(false);
      // tslint:disable-next-line:no-floating-promises
      ref.current.onActionSuccess();
      expect(await driver.checkIconExists()).toEqual(true);
      jest.runTimersToTime(1999);
      expect(await driver.checkIconExists()).toEqual(true);
      jest.runTimersToTime(2000);
      await flushPromises();
      expect(await driver.checkIconExists()).toEqual(false);
      expect(await driver.getButtonTextContent()).toEqual('add to cart');
    });

    it('should focus on button using ref', async () => {
      expect(document.activeElement.tagName).not.toEqual('BUTTON');
      expect(await driver.isFocused()).toEqual(false);
      ref.current.focus();
      expect(await driver.isFocused()).toEqual(true);
    });
  });

  it('when disabled prop is true button should be disabled', async () => {
    const driver = createDriver(<StatesButton {...defaultProps} disabled />);
    expect(await driver.isButtonDisabled()).toEqual(true);
  });

  it('when disabled prop is false button should be disabled', async () => {
    const driver = createDriver(
      <StatesButton {...defaultProps} disabled={false} />,
    );
    expect(await driver.isButtonDisabled()).toEqual(false);
  });

  it('should be able to pass className as prop', async () => {
    const driver = createDriver(
      <StatesButton {...defaultProps} className={'myClass'} />,
    );
    expect((await driver.element()).className).toContain('myClass');
  });
});
