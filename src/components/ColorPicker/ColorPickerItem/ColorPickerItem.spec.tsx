import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { colorPickerItemDriverFactory } from './ColorPickerItem.driver';
import { ColorPickerItem } from './';

describe('ColorPickerItem', () => {
  const tooltipContent = 'Hello';
  const tooltipInnerContent = `ArrowTop.svg${tooltipContent}`;
  const tooltipDataHook = 'colorPickerItem-tooltip';
  const createDriver = createUniDriverFactory(colorPickerItemDriverFactory);

  const bootstrap = (props = {}) => {
    const dataHook = 'compDataHook';
    const compProps = {
      onChange: () => {},
      'data-hook': dataHook,
      tooltipDataHook,
      ...props,
    };
    return createDriver(<ColorPickerItem {...compProps} />);
  };

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  it('should not be disabled by default', async () => {
    const driver = bootstrap();
    expect(await driver.isDisabled()).toBe(false);
  });

  it('should not be crossed out by default', async () => {
    const driver = bootstrap();
    expect(await driver.isCrossedOut()).toBe(false);
  });

  it('should support disabled state', async () => {
    const driver = bootstrap({ disabled: true });
    expect(await driver.isCrossedOut()).toBe(false);
    expect(await driver.isDisabled()).toBe(true);
  });

  it('should support crossed out state', async () => {
    const driver = bootstrap({ isCrossedOut: true });
    expect(await driver.isCrossedOut()).toBe(true);
    expect(await driver.isDisabled()).toBe(false);
  });

  it('should support crossed out and disabled state simultaneously', async () => {
    const driver = bootstrap({ isCrossedOut: true, disabled: true });
    expect(await driver.isCrossedOut()).toBe(true);
    expect(await driver.isDisabled()).toBe(true);
  });

  it('should display tooltip', async () => {
    const driver = bootstrap({ tooltip: tooltipContent });
    expect(await driver.getTooltipText()).toBe(tooltipInnerContent);
  });

  it('should disabled tooltip disabled state', async () => {
    const driver = bootstrap({ tooltip: tooltipContent, disabled: true });
    expect(await driver.getTooltipText()).toBe(tooltipInnerContent);
  });

  it('should disabled tooltip crossed out state state', async () => {
    const driver = bootstrap({ tooltip: tooltipContent, isCrossedOut: true });
    expect(await driver.getTooltipText()).toBe(tooltipInnerContent);
  });
});
