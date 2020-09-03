import * as React from 'react';
import { jsdomReactUniDriver } from '@unidriver/jsdom-react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { colorPickerItemDriverFactory } from './ColorPickerItem.driver';
import { ColorPickerItem } from './';

describe('ColorPickerItem', () => {
  const createDriver = createUniDriverFactory(colorPickerItemDriverFactory);

  afterEach(() => {
    // this is obviousle a "hack".
    // this data-hook is taken from the wix-ui-core/Popover implementation:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-ui-core/src/components/popover/Popover.uni.driver.ts#L17
    // TODO fix TooltipDriver in core, to remove the portal when not needed
    const portal =
      document && document.querySelector('[data-hook="popover-portal"]');

    if (portal) {
      portal.remove();
    }
  });

  it('should render', async () => {
    const driver = createDriver(<ColorPickerItem onChange={e => {}} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should not be disabled by default', async () => {
    const driver = createDriver(<ColorPickerItem onChange={e => {}} />);
    expect(await driver.isDisabled()).toBe(false);
  });

  it('should not be crossed out by default', async () => {
    const driver = createDriver(<ColorPickerItem onChange={e => {}} />);
    expect(await driver.isCrossedOut()).toBe(false);
  });

  it('should support disabled state', async () => {
    const driver = createDriver(<ColorPickerItem disabled />);
    expect(await driver.isCrossedOut()).toBe(false);
    expect(await driver.isDisabled()).toBe(true);
  });

  it('should support crossed out state', async () => {
    const driver = createDriver(<ColorPickerItem isCrossedOut />);
    expect(await driver.isCrossedOut()).toBe(true);
    expect(await driver.isDisabled()).toBe(false);
  });

  it('should support crossed out and disabled state simultaneously', async () => {
    const driver = createDriver(<ColorPickerItem disabled isCrossedOut />);
    expect(await driver.isCrossedOut()).toBe(true);
    expect(await driver.isDisabled()).toBe(true);
  });

  it('should display tooltip', async () => {
    const driver = createDriver(<ColorPickerItem tooltip="Hello" />);
    expect(
      await driver.getTooltipText(jsdomReactUniDriver(document.body)),
    ).toBe('ArrowTop.svgHello');
  });

  it('should disabled tooltip disabled state', async () => {
    const driver = createDriver(<ColorPickerItem disabled tooltip="Hello" />);
    expect(
      await driver.getTooltipText(jsdomReactUniDriver(document.body)),
    ).toBe('ArrowTop.svgHello');
  });

  it('should disabled tooltip crossed out state state', async () => {
    const driver = createDriver(
      <ColorPickerItem isCrossedOut tooltip="Hello" />,
    );
    expect(
      await driver.getTooltipText(jsdomReactUniDriver(document.body)),
    ).toBe('ArrowTop.svgHello');
  });
});
