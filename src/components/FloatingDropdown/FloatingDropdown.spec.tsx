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
import { FloatingDropdownProps } from './FloatingDropdown';
import { getFloatingDropdownTestProps } from './test-props';

describe('FloatingDropdown', () => {
  const createDriver = createUniDriverFactory(floatingDropdownDriverFactory);

  const testProps = getFloatingDropdownTestProps();

  it('should render', async () => {
    const driver = createDriver(<FloatingDropdown {...testProps} />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <FloatingDropdown {...testProps} />,
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
          <FloatingDropdown {...testProps} />,
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
