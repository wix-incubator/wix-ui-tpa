import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { calendarPopoverDriverFactory } from './CalendarPopover.driver';
import { CalendarPopover, CalendarPopoverProps, Sides } from '.';
import { calendarPopoverTestkitFactory } from '../../testkit';
import { calendarPopoverTestkitFactory as enzymePopoverTestkitFactory } from '../../testkit/enzyme';

const defaultProps: CalendarPopoverProps = {
  onClose: () => {},
  closeAriaLabel: 'close',
};

describe('CalendarPopover', () => {
  const createDriver = createUniDriverFactory(calendarPopoverDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<CalendarPopover {...defaultProps} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should show withArrow state', async () => {
    const driver = createDriver(
      <CalendarPopover withArrow {...defaultProps} />,
    );

    expect(await driver.hasArrow()).toBeTruthy();
  });

  it('should show withShadow state', async () => {
    const driver = createDriver(
      <CalendarPopover withShadow {...defaultProps} />,
    );

    expect(await driver.hasShadow()).toBeTruthy();
  });

  it('should show right arrow state', async () => {
    const sideMock = Sides.Right;
    const driver = createDriver(
      <CalendarPopover arrowSide={sideMock} {...defaultProps} />,
    );

    expect(await driver.hasRightArrow(sideMock)).toBeTruthy();
  });

  it("should show title with the value 'title'", async () => {
    const driver = createDriver(
      <CalendarPopover title="title" {...defaultProps} />,
    );

    expect(await driver.hasTitle()).toBeTruthy();
  });

  it('should show arrow top of 40', async () => {
    const arrowTopMock = 40;
    const driver = createDriver(
      <CalendarPopover arrowTop={arrowTopMock} {...defaultProps} />,
    );

    expect(await driver.hasArrowTop(arrowTopMock)).toBeTruthy();
  });

  it('should show shown state', async () => {
    const driver = createDriver(<CalendarPopover isShown {...defaultProps} />);
    expect(await driver.hasShown()).toBeTruthy();
  });

  it('should show animated state', async () => {
    const driver = createDriver(<CalendarPopover animated {...defaultProps} />);
    expect(await driver.hasAnimation()).toBeTruthy();
  });

  it('should show auto focused state', async () => {
    const driver = createDriver(
      <CalendarPopover manualFocus {...defaultProps} />,
    );
    expect(await driver.hasManualFocus()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <CalendarPopover {...defaultProps} />,
          calendarPopoverTestkitFactory,
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
          <CalendarPopover {...defaultProps} />,
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
