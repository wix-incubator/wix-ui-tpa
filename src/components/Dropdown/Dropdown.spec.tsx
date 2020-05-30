import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { DropdownDriver, dropdownDriverFactory } from './Dropdown.driver';
import { Dropdown } from './';
import { dropdownTestkitFactory } from '../../testkit';
import { dropdownTestkitFactory as enzymeDropdownTestkitFactory } from '../../testkit/enzyme';
import { DropdownOptionProps } from './DropdownOption';
import Mock = jest.Mock;

describe('Dropdown', () => {
  const createDriver = createUniDriverFactory(dropdownDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Dropdown options={[]} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<Dropdown options={[]} />),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  it('should have 5 options when opened', async () => {
    const options: DropdownOptionProps[] = new Array(5)
      .fill(null)
      .map((el, i) => ({
        id: `${i}`,
        value: `value-${i}`,
      }));
    const driver = createDriver(<Dropdown options={options} />);
    await driver.click(); // open
    expect(await driver.getOptionsCount()).toBe(5);
  });

  it('should have aria-haspopup attribute', async () => {
    const driver = createDriver(<Dropdown options={[]} />);
    expect(await driver.hasAriaHasPopup()).toBe(true);
  });

  it('should not have aria-label attribute when not received by props', async () => {
    const driver = createDriver(<Dropdown options={[]} />);
    expect(await driver.getAriaLabel()).toBe(null);
  });

  it('should have aria-label attribute when received by props', async () => {
    const ariaLabelContent = 'Wubba lubba';
    const driver = createDriver(
      <Dropdown aria-label={ariaLabelContent} options={[]} />,
    );
    expect(await driver.getAriaLabel()).toBe(ariaLabelContent);
  });

  it('should not have aria-labelledby attribute when not received by props', async () => {
    const driver = createDriver(<Dropdown options={[]} />);
    expect(await driver.getAriaLabelledBy()).toBe(null);
  });

  it('should have aria-labelledby attribute when received by props', async () => {
    const ariaLabelledByContent = 'Wubba lubba';
    const driver = createDriver(
      <Dropdown aria-labelledby={ariaLabelledByContent} options={[]} />,
    );
    expect(await driver.getAriaLabelledBy()).toBe(ariaLabelledByContent);
  });

  describe('error states', () => {
    it('should have error', async () => {
      const driver = createDriver(<Dropdown options={[]} error />);
      expect(await driver.hasError()).toBeTruthy();
      expect(await driver.hasErrorMessage()).toBeFalsy();
    });

    it('should have error message', async () => {
      const errorMessage = 'Ooops, something went wrong';
      const driver = createDriver(
        <Dropdown options={[]} error errorMessage={errorMessage} />,
      );
      expect(await driver.hasError()).toBeTruthy();
      expect(await driver.hasErrorMessage()).toBeTruthy();
      expect(await driver.getErrorMessageContent()).toMatch(errorMessage);
    });
  });

  describe('onChange', () => {
    let driver: DropdownDriver;
    let onChange: Mock;
    const placeholder = 'placeholder';
    const options = new Array(5).fill(null).map((el, i) => ({
      id: `${i}`,
      value: `value-${i}`,
      isSelectable: i < 3,
    }));

    beforeEach(async () => {
      onChange = jest.fn();
      driver = createDriver(
        <Dropdown
          options={options}
          onChange={onChange}
          placeholder={placeholder}
        />,
      );
      await driver.click(); // open
    });

    it('should be called when selection changed', async () => {
      expect(await driver.getDropdownText()).toEqual(placeholder);
      await driver.selectOptionAt(0);
      expect(await driver.getDropdownText()).toEqual(options[0].value);
      expect(onChange).toHaveBeenCalledWith(options[0]);
    });

    it('should not be called when selecting disabled item', async () => {
      await driver.selectOptionAt(4);
      expect(onChange).not.toHaveBeenCalled();
    });

    it('should not be called when re-selecting a selected item', async () => {
      await driver.selectOptionAt(0);
      await driver.click(); // open
      await driver.selectOptionAt(0);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('disabled', () => {
    it('should be disabled', async () => {
      const driver = createDriver(<Dropdown options={[]} disabled />);
      expect(await driver.isDisabled()).toBe(true);
    });
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Dropdown />, dropdownTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Dropdown />,
          enzymeDropdownTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});

describe('Native Dropdown', () => {
  const createDriver = createUniDriverFactory(dropdownDriverFactory);
  const NativeConfiguredDropdown = props =>
    TPAComponentsWrapper({ mobile: true })(
      <Dropdown options={[]} mobileNativeSelect {...props} />,
    );

  it('should render native', async () => {
    const driver = createDriver(<NativeConfiguredDropdown />);
    expect(await driver.isNativeSelect()).toBe(true);
  });

  it('should not render native on desktop', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: false })(
        <Dropdown options={[]} mobileNativeSelect />,
      ),
    );
    expect(await driver.isNativeSelect()).toBe(false);
  });

  it('should have 5 options when opened', async () => {
    const options: DropdownOptionProps[] = new Array(5)
      .fill(null)
      .map((el, i) => ({
        id: `${i}`,
        value: `value-${i}`,
      }));
    const driver = createDriver(<NativeConfiguredDropdown options={options} />);
    expect(await driver.getOptionsCount()).toBe(5);
  });

  it('should not have aria-label attribute when not received by props', async () => {
    const driver = createDriver(<NativeConfiguredDropdown />);
    expect(await driver.getAriaLabel()).toBe(null);
  });

  it('should have aria-label attribute when received by props', async () => {
    const ariaLabelContent = 'Wubba lubba';
    const driver = createDriver(
      <NativeConfiguredDropdown aria-label={ariaLabelContent} />,
    );
    expect(await driver.getAriaLabel()).toBe(ariaLabelContent);
  });

  it('should not have aria-labelledby attribute when not received by props', async () => {
    const driver = createDriver(<NativeConfiguredDropdown />);
    expect(await driver.getAriaLabelledBy()).toBe(null);
  });

  it('should have aria-labelledby attribute when received by props', async () => {
    const ariaLabelledByContent = 'Wubba lubba';
    const driver = createDriver(
      <NativeConfiguredDropdown aria-labelledby={ariaLabelledByContent} />,
    );
    expect(await driver.getAriaLabelledBy()).toBe(ariaLabelledByContent);
  });

  describe('onChange', () => {
    let driver: DropdownDriver;
    let onChange: Mock;
    const placeholder = 'placeholder';
    const options = new Array(5).fill(null).map((el, i) => ({
      id: `${i}`,
      value: `value-${i}`,
      isSelectable: i < 3,
    }));

    beforeEach(async () => {
      onChange = jest.fn();
      driver = createDriver(
        <NativeConfiguredDropdown
          options={options}
          onChange={onChange}
          placeholder={placeholder}
        />,
      );
    });

    it('should be called when selection changed', async () => {
      expect(await driver.getDropdownText()).toEqual(placeholder);
      await driver.selectOptionAt(2);
      expect(await driver.getDropdownText()).toEqual(options[2].value);
      expect(onChange).toHaveBeenCalledWith(options[2]);
    });

    it('should not be called when selecting disabled item', async () => {
      await driver.selectOptionAt(4);
      expect(onChange).not.toHaveBeenCalled();
    });

    it('should not be called when re-selecting a selected item', async () => {
      await driver.selectOptionAt(0);
      await driver.selectOptionAt(0);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('error states', () => {
    it('should have error', async () => {
      const driver = createDriver(
        <NativeConfiguredDropdown options={[]} error />,
      );
      expect(await driver.hasError()).toBeTruthy();
      expect(await driver.hasErrorMessage()).toBeFalsy();
    });

    it('should have error message', async () => {
      const errorMessage = 'Ooops, something went wrong';
      const driver = createDriver(
        <NativeConfiguredDropdown error errorMessage={errorMessage} />,
      );
      expect(await driver.hasError()).toBeTruthy();
      expect(await driver.hasErrorMessage()).toBeTruthy();
      expect(await driver.getErrorMessageContent()).toMatch(errorMessage);
    });
  });

  describe('disabled', () => {
    it('should be disabled', async () => {
      const driver = createDriver(<NativeConfiguredDropdown disabled />);
      expect(await driver.isDisabled()).toBe(true);
    });
  });

  describe('unsupported driver methods', () => {
    it('hasAriaHasPopup', async () => {
      const driver = createDriver(<NativeConfiguredDropdown />);
      expect(await driver.hasAriaHasPopup()).toBe(null);
    });

    it('areOptionsShown', async () => {
      const driver = createDriver(<NativeConfiguredDropdown />);
      expect(await driver.areOptionsShown()).toBe(null);
    });

    it('click', async () => {
      const driver = createDriver(<NativeConfiguredDropdown />);
      expect(await driver.click()).toBe(null);
    });
  });
});
