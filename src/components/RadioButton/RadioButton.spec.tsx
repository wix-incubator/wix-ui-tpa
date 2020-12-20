import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { radioButtonDriverFactory } from './RadioButton.driver';
import { RadioButton } from './RadioButton';
import { radioButtonTestkitFactory } from '../../testkit';
import { radioButtonTestkitFactory as enzymeRadioButtonTestkitFactory } from '../../testkit/enzyme';

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

  it('should have focus state', async () => {
    const driver = createDriver(<RadioButton {...defProps} />);
    await driver.clickInput();
    expect(await driver.isFocused()).toBeTruthy();
  });

  it('should have focus ring with withFocusRing prop', async () => {
    const driver = createDriver(<RadioButton withFocusRing {...defProps} />);
    await driver.clickInput();
    expect(await driver.isContainsFocusRing()).toBeTruthy();
  });

  it('should not have focus ring without prop', async () => {
    const driver = createDriver(<RadioButton {...defProps} />);
    await driver.clickInput();
    expect(await driver.isContainsFocusRing()).toBeFalsy();
  });

  it('should not have focus ring after blur', async () => {
    const driver = createDriver(<RadioButton withFocusRing {...defProps} />);
    await driver.clickInput();
    expect(await driver.isContainsFocusRing()).toBeTruthy();
    await driver.blurInput();
    expect(await driver.isContainsFocusRing()).toBeFalsy();
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
