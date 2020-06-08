import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { popoverDriverFactory } from './Popover.driver';
import { Popover, PopoverProps } from './';
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

  it('should show right to left state', async () => {
    const driver = createDriver(<Popover rightToLeft {...defaultProps} />);
    expect(await driver.isRightToLeft()).toBeTruthy();
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
