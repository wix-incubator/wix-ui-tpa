import * as React from 'react';
import { mount } from 'enzyme';

import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';

import { popoverTestkitFactory } from '../../testkit';
import { popoverTestkitFactory as enzymePopoverTestkitFactory } from '../../testkit/enzyme';

import { popoverDriverFactory } from './Popover.driver';
import { Popover, PopoverProps } from './';

describe('Popover', () => {
  const createDriver = createDriverFactory(popoverDriverFactory);

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
    expect(driver.exists()).toBe(true);
  });

  describe('behaviour', () => {
    it('should open on element click', async () => {
      const driver = bootstrap();

      expect(driver.isContentElementExists()).toBeFalsy();
      await driver.click();
      expect(driver.isContentElementExists()).toBeTruthy();
    });
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        isTestkitExists(
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
        isEnzymeTestkitExists(
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
