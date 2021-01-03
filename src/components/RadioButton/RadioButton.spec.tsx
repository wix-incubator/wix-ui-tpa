import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { radioButtonDriverFactory } from './RadioButton.driver';
import { RadioButton } from './RadioButton';
import { radioButtonTestkitFactory } from '../../testkit';
import { radioButtonTestkitFactory as enzymeRadioButtonTestkitFactory } from '../../testkit/enzyme';
import { Simulate } from 'react-dom/test-utils';

describe('RadioButton', () => {
  const createDriver = createUniDriverFactory(radioButtonDriverFactory);

  const defProps = {
    onChange: () => {},
    label: 'label',
    value: 'value',
  };

  it('should render', async () => {
    const driver = createDriver(<RadioButton {...defProps} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should show checked state', async () => {
    const driver = createDriver(<RadioButton checked {...defProps} />);
    expect(await driver.isChecked()).toBeTruthy();
  });

  it('should show disabled state', async () => {
    const driver = createDriver(<RadioButton disabled {...defProps} />);
    expect(await driver.isDisabled()).toBeTruthy();
  });

  it('should lose focus state on blur', async () => {
    const driver = createDriver(<RadioButton {...defProps} />);
    await driver.clickInput();
    expect(await driver.isFocused()).toBeTruthy();
    Simulate.blur(await driver.getInput());
    expect(await driver.isFocused()).toBeFalsy();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <RadioButton {...defProps} />,
          radioButtonTestkitFactory,
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
          <RadioButton {...defProps} />,
          enzymeRadioButtonTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
