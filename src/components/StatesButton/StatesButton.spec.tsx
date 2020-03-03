import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import * as React from 'react';
import { StatesButton, StatesButtonProps } from './StatesButton';
import {
  StatesButtonDriver,
  statesButtonDriverFactory,
} from './StatesButton.driver';
import { BUTTON_STATES } from './constants';

jest.useFakeTimers();

describe('StatesButton', () => {
  const createDriver = createUniDriverFactory(statesButtonDriverFactory);

  let onClickSpy;
  let defaultProps: StatesButtonProps;

  beforeEach(() => {
    onClickSpy = jest.fn();

    defaultProps = {
      state: BUTTON_STATES.IDLE,
      idleContent: 'idle',
      inProgressContent: 'loading',
      successContent: 'success',
      failureContent: 'failure',
      onClick: onClickSpy,
      disabled: false,
    };
  });

  describe('default props', () => {
    let driver: StatesButtonDriver;
    let ref: React.RefObject<StatesButton>;

    beforeEach(() => {
      ref = React.createRef();
      driver = createDriver(<StatesButton {...defaultProps} ref={ref} />);
    });

    it('should render text from idleContent prop', async () => {
      expect(await driver.getButtonTextContent()).toEqual('idle');
    });

    it('should have aria-live attribute and not aria-busy', async () => {
      expect((await driver.element()).getAttribute('aria-live')).toEqual(
        'assertive',
      );
      expect((await driver.element()).getAttribute('aria-busy')).toBeNull();
    });

    it('should focus on button using ref', async () => {
      expect(await driver.isFocused()).toEqual(false);
      ref.current.focus();
      expect(await driver.isFocused()).toEqual(true);
    });
  });

  describe('states', () => {
    let driver: StatesButtonDriver;

    describe('in progress', () => {
      beforeEach(() => {
        onClickSpy = jest.fn();
        driver = createDriver(
          <StatesButton
            {...defaultProps}
            state={BUTTON_STATES.IN_PROGRESS}
            onClick={onClickSpy}
          />,
        );
      });

      it('should render in progress content', async () => {
        expect(await driver.getButtonTextContent()).toEqual('loading');
      });

      it('should not invoke on click', async () => {
        await driver.click();
        expect(onClickSpy).not.toHaveBeenCalled();
      });

      it('should have aria-busy attribute and not aria-live', async () => {
        expect((await driver.element()).getAttribute('aria-busy')).toEqual(
          'true',
        );
        expect((await driver.element()).getAttribute('aria-live')).toEqual(
          'assertive',
        );
      });
    });

    describe('success', () => {
      let onNotificationEndSpy;
      beforeEach(() => {
        onNotificationEndSpy = jest.fn();
        onClickSpy = jest.fn();
        driver = createDriver(
          <StatesButton
            {...defaultProps}
            state={BUTTON_STATES.SUCCESS}
            onClick={onClickSpy}
            onNotificationEnd={onNotificationEndSpy}
          />,
        );
      });

      it('should render success content when given as prop', async () => {
        expect(await driver.getButtonTextContent()).toEqual('success');
      });

      it('should render check mark when no success content given', async () => {
        driver = createDriver(
          <StatesButton
            {...defaultProps}
            successContent={undefined}
            state={BUTTON_STATES.SUCCESS}
            onClick={onClickSpy}
          />,
        );
        expect(await driver.checkIconExists()).toEqual(true);
      });

      it('should not invoke on click', async () => {
        await driver.click();
        expect(onClickSpy).not.toHaveBeenCalled();
      });

      it('should have aria-live attribute and not aria-busy', async () => {
        expect((await driver.element()).getAttribute('aria-live')).toEqual(
          'assertive',
        );
        expect((await driver.element()).getAttribute('aria-busy')).toBeNull();
      });
    });
  });

  it('when disabled prop is true button should be disabled', async () => {
    const driver = createDriver(<StatesButton {...defaultProps} disabled />);
    expect(await driver.isButtonDisabled()).toEqual(true);
  });

  it('when disabled prop is false button should be not disabled', async () => {
    const driver = createDriver(
      <StatesButton {...defaultProps} disabled={false} />,
    );
    expect(await driver.isButtonDisabled()).toEqual(false);
  });
});
