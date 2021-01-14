import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { floatingDropdownDriverFactory } from './FloatingDropdown.driver';
import { getFloatingDropdownTestProps } from './test-props';
import { FloatingDropdown } from './FloatingDropdown';
import { TPAComponentsProvider } from '../TPAComponentsConfig';

describe('FloatingDropdown', () => {
  const createDriver = createUniDriverFactory(floatingDropdownDriverFactory);
  const testProps = getFloatingDropdownTestProps();

  describe('desktop', () => {
    it('should expand dropdown after click on enabled dropdownBase', async () => {
      const driver = createDriver(<FloatingDropdown {...testProps} />);
      await driver.clickOnDropdownBase();
      expect(await driver.dropdownContentDisplayed()).toBe(true);
    });

    it('should change isExpanded prop after click on dropdownBase', async () => {
      const driver = createDriver(<FloatingDropdown {...testProps} />);
      await driver.clickOnDropdownBase();
      const isAriaExpanded = (await driver.getAriaExpanded()) === 'true';
      expect(isAriaExpanded).toBe(true);
    });

    it('should properly display selected value', async () => {
      const { value, id } = testProps.options[0];
      const driver = createDriver(
        <FloatingDropdown {...testProps} value={id} />,
      );
      expect(await driver.getBaseSelectedValue()).toBe(value);
    });

    it('should not expand dropdown after click on disabled dropdownBase', async () => {
      const driver = createDriver(<FloatingDropdown {...testProps} disabled />);
      await driver.clickOnDropdownBase();
      expect(await driver.dropdownContentDisplayed()).toBe(false);
    });
  });

  describe('native mobile', () => {
    const FloatingDropdownTest = (props) => {
      return (
        <TPAComponentsProvider value={{ mobile: true }}>
          <FloatingDropdown {...props} />
        </TPAComponentsProvider>
      );
    };

    it('should properly display selected value', async () => {
      const { value, id } = testProps.options[0];
      const driver = createDriver(
        <FloatingDropdownTest {...testProps} value={id} />,
      );
      expect(await driver.getBaseSelectedValue()).toBe(value);
    });
  });
});
