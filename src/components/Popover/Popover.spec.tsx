import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { popoverDriverFactory } from './Popover.driver';
import { Popover } from './';
import { popoverTestkitFactory } from '../../testkit';
import { popoverTestkitFactory as enzymePopoverTestkitFactory } from '../../testkit/enzyme';

describe('Popover', () => {
  const createDriver = createUniDriverFactory(popoverDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Popover />);
    expect(await driver.exists()).toBe(true);
  });

  it('should show right to left state', async () => {
    const driver = createDriver(<Popover rightToLeft/>);
    expect(await driver.isRightToLeft()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Popover />, popoverTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Popover />,
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
