import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { counterDriverFactory } from './Counter.driver';
import { Counter } from './';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { counterTestkitFactory } from '../../testkit';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { counterTestkitFactory as enzymeCounterTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

describe('Counter', () => {
  const createDriver = createUniDriverFactory(counterDriverFactory);

  it('should render', async () => {
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
      />,
    );

    expect(await driver.exists()).toBe(true);
  });

  it('should render "disabled" counter', async () => {
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        disabled
      />,
    );

    expect(await driver.isCounterComponentDisabled()).toBe(true);
    expect(await driver.isMinusButtonDisabled()).toBe(true);
    expect(await driver.isPlusButtonDisabled()).toBe(true);
    expect(await driver.isInputComponentDisabled()).toBe(true);
  });

  it('should render "error" counter', async () => {
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        error
      />,
    );

    expect(await driver.hasCounterComponentError()).toBe(true);
  });

  it('should render counter with disabled minus button', async () => {
    const value = 10;
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        min={value}
        value={value}
      />,
    );

    expect(await driver.isMinusButtonDisabled()).toBe(true);
  });

  it('should render counter with disabled plus button', async () => {
    const value = 10;
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        max={value}
        value={value}
      />,
    );

    expect(await driver.isPlusButtonDisabled()).toBe(true);
  });

  it('should render counter with specific value in input field', async () => {
    const value = 10;
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        value={value}
      />,
    );

    expect(await driver.isInputValueEqualTo(value)).toBe(true);
  });

  it('should call onChange with specific values', async () => {
    let acc;
    const value = 10;
    const step = 1;
    const func = jest.fn((val: string) => {
      acc = Number(val);
    });
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={func}
        step={step}
        value={value}
      />,
    );

    await driver.pressMinus();
    expect(acc).toEqual(value - step);

    await driver.pressPlus();
    expect(acc).toEqual(value + step);
  });

  it('should call onChange with a typed input', async () => {
    const onChange = jest.fn();
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={onChange}
        step={1}
        value={0}
      />,
    );

    await driver.enterValue('10');
    expect(onChange).toHaveBeenCalledWith('10');
  });

  it('should have default role attribute and aria-labelledby attribute', async () => {
    const value = 10;
    const counterAriaLabelledBy = 'labelled by testy test';
    const counterAriaLabel = 'testy test';
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        aria-label={counterAriaLabel}
        aria-labelledby={counterAriaLabelledBy}
        onChange={() => {}}
        value={value}
      />,
    );
    expect(await driver.getCounterAriaLabel()).toEqual(counterAriaLabel);
    expect(await driver.getCounterAriaLabellledby()).toEqual(
      counterAriaLabelledBy,
    );
  });

  it('should render tooltip component if in error state and error messsage is defined', async () => {
    const value = 10;
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        errorMessage="something here is not ok"
        onChange={() => {}}
        value={value}
        error
      />,
    );

    expect(await driver.hasCounterComponentError()).toBeTruthy();
    expect(await driver.isErrorTooltipExists()).toBeTruthy();
    expect(await driver.getErrorMessageContent()).toContain(
      'something here is not ok',
    );
  });

  it('should NOT render tooltip compoent if error messsage is defined but not in error state', async () => {
    const value = 10;
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        errorMessage="something here is not ok"
        onChange={() => {}}
        value={value}
      />,
    );
    expect(await driver.hasCounterComponentError()).toBeFalsy();
    expect(await driver.isErrorTooltipExists()).toBeFalsy();
  });

  it('should be in error state without tooltip if there is no error message', async () => {
    const value = 10;
    const driver = createDriver(
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={() => {}}
        value={value}
        error
      />,
    );
    expect(await driver.hasCounterComponentError()).toBeTruthy();
    expect(await driver.isErrorTooltipExists()).toBeFalsy();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Counter
            inputAriaLabel={'amount'}
            incrementAriaLabel={'increment'}
            decrementAriaLabel={'decrement'}
            onChange={() => {}}
          />,
          counterTestkitFactory,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Counter
            inputAriaLabel={'amount'}
            incrementAriaLabel={'increment'}
            decrementAriaLabel={'decrement'}
            onChange={() => {}}
          />,
          enzymeCounterTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
