import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { popoverDriverFactory } from './Popover.driver';
import { Popover, PopoverProps, Sides } from './';
import { popoverTestkitFactory } from '../../testkit';
import { popoverTestkitFactory as enzymePopoverTestkitFactory } from '../../testkit/enzyme';

const defaultProps: PopoverProps = {
  onClose: () => {},
};

describe('Popover', () => {
  const createDriver = createUniDriverFactory(popoverDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Popover {...defaultProps} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should show withArrow state', async () => {
    const driver = createDriver(<Popover withArrow {...defaultProps} />);

    expect(await driver.withArrow()).toBeTruthy();
  });

  it('should show withShadow state', async () => {
    const driver = createDriver(<Popover withShadow {...defaultProps} />);

    expect(await driver.withShadow()).toBeTruthy();
  });

  it('should show right arrow state', async () => {
    const driver = createDriver(
      <Popover arrowSide={Sides.Right} {...defaultProps} />,
    );

    expect(await driver.isRightArrow()).toBeTruthy();
  });

  it("should show title with the value 'title'", async () => {
    const driver = createDriver(<Popover title="title" {...defaultProps} />);

    expect(await driver.withTitle()).toBeTruthy();
  });

  it('should show arrow top of 50px', async () => {
    const driver = createDriver(<Popover arrowTop={44} {...defaultProps} />);

    expect(await driver.withArrowTop()).toBeTruthy();
  });

  it('should show shown state', async () => {
    const driver = createDriver(<Popover isShown {...defaultProps} />);
    expect(await driver.hasShown()).toBeTruthy();
  });

  it('should show animated state', async () => {
    const driver = createDriver(<Popover animated {...defaultProps} />);
    expect(await driver.hasAnimation()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Popover {...defaultProps} />,
          popoverTestkitFactory,
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
          <Popover {...defaultProps} />,
          enzymePopoverTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
