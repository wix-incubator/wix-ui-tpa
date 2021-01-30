import * as React from 'react';
import { mount } from 'enzyme';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';

import { popoverTestkitFactory } from '../../testkit';
import { popoverTestkitFactory as enzymePopoverTestkitFactory } from '../../testkit/enzyme';

import { popoverDriverFactory } from './Popover.driver';
import { Popover, PopoverProps, TriggerAction } from './';
import { Simulate } from 'react-dom/test-utils';

describe('Popover', () => {
  const createDriver = createUniDriverFactory(popoverDriverFactory);

  const bootstrap = (props: Partial<PopoverProps> = {}) => {
    return createDriver(
      <Popover placement="top" {...props}>
        <Popover.Element>
          <span>Trigger Element</span>
        </Popover.Element>
        <Popover.Content>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus, ut.
          </span>
        </Popover.Content>
      </Popover>,
    );
  };

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  describe('uncontrolled', () => {
    it("shouldn't open on click", async () => {
      const driver = bootstrap();
      await driver.click();
      expect(await driver.isContentElementExists()).toBeFalsy();
    });

    it("shouldn't open on click", async () => {
      const driver = bootstrap();
      expect(await driver.isContentElementExists()).toBeFalsy();
      Simulate.mouseEnter(await driver.element());
      expect(await driver.isContentElementExists()).toBeTruthy();
    });
  });

  describe('controlled', () => {
    it('should be open when shown is false', async () => {
      const driver = bootstrap({ shown: false });
      expect(await driver.isContentElementExists()).toBeFalsy();
    });

    it('should be open when shown is true', async () => {
      const driver = bootstrap({ shown: true });
      expect(await driver.isContentElementExists()).toBeTruthy();
    });
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Popover placement="top">
            <Popover.Element>
              <span>element</span>
            </Popover.Element>
            <Popover.Content>
              <div>content</div>
            </Popover.Content>
          </Popover>,
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
          <Popover placement="top">
            <Popover.Element>
              <span>element</span>
            </Popover.Element>
            <Popover.Content>
              <div>content</div>
            </Popover.Content>
          </Popover>,
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
