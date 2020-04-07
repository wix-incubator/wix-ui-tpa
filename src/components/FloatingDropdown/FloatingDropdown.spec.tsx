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

  it('should expand dropdown after click on enabled dropdownBase', async () => {
    const driver = createDriver(<FloatingDropdown {...testProps} />);
    await driver.clickOnDropdownBase();
    expect(await driver.dropdownContentDisplayed()).toBe(true);
  });

  it('should properly display selected value', async () => {
    const { value, id } = testProps.options[0];
    const driver = createDriver(<FloatingDropdown {...testProps} value={id} />);
    expect(await driver.getBaseSelectedValue()).toBe(value);
  });

  it('should not expand dropdown after click on disabled dropdownBase', async () => {
    const driver = createDriver(<FloatingDropdown {...testProps} disabled />);
    await driver.clickOnDropdownBase();
    expect(await driver.dropdownContentDisplayed()).toBe(false);
  });
});
