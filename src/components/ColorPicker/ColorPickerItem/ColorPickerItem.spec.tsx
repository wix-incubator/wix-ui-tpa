import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { colorPickerItemDriverFactory } from './ColorPickerItem.driver';
import { ColorPickerItem } from './';

describe('ColorPicker', () => {
  const createDriver = createUniDriverFactory(colorPickerItemDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<ColorPickerItem onChange={e => {}} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should not be disabled by default', async () => {
    const driver = createDriver(
      <span>
        <ColorPickerItem onChange={e => {}} />
      </span>,
    );
    expect(await driver.isDisabled()).toBe(false);
  });

  it('should support disabled state', async () => {
    const driver = createDriver(
      <span>
        <ColorPickerItem disabled />
      </span>,
    );
    expect(await driver.isDisabled()).toBe(true);
  });

  it('should display tooltip', async () => {
    const driver = createDriver(
      <span>
        <ColorPickerItem tooltip="Hello" />
      </span>,
    );
    expect(await driver.getTooltipText()).toBe('ArrowTop.svgHello');
  });

  it('should be disabled and with tooltip', async () => {
    const driver = createDriver(
      <span>
        <ColorPickerItem disabled tooltip="Hello" />
      </span>,
    );
    expect(await driver.isDisabled()).toBe(true);
    expect(await driver.getTooltipText()).toBe('ArrowTop.svgHello');
  });
});
