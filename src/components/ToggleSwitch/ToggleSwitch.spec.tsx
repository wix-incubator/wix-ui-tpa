import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import { ToggleSwitch } from './';
import { toggleSwitchDriverFactory } from './ToggleSwitch.driver';

describe('ToggleSwitch', () => {
  const createDriver = createUniDriverFactory(toggleSwitchDriverFactory);

  it('should be checked', async () => {
    const driver = createDriver(<ToggleSwitch checked />);

    expect(await driver.isChecked()).toBeTruthy();
  });

  it('should be disabled', async () => {
    const driver = createDriver(<ToggleSwitch disabled />);

    expect(await driver.isDisabled()).toBeTruthy();
  });

  it('should change state', async () => {
    const driver = createDriver(<ToggleSwitch />);

    expect(await driver.isChecked()).toBeFalsy();

    await driver.click();

    expect(await driver.isChecked()).toBeTruthy();
  });
});
