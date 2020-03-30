import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { floatingDropdownDriverFactory } from './FloatingDropdown.driver';
import { FloatingDropdown } from './';
import { floatingDropdownTestkitFactory } from '../../testkit';
import { floatingDropdownTestkitFactory as enzymeFloatingDropdownTestkitFactory } from '../../testkit/enzyme';

describe('FloatingDropdown', () => {
  const createDriver = createUniDriverFactory(floatingDropdownDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<FloatingDropdown buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <FloatingDropdown />,
          floatingDropdownTestkitFactory,
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
          <FloatingDropdown />,
          enzymeFloatingDropdownTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
