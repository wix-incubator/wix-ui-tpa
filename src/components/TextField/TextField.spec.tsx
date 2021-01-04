import * as React from 'react';
import { textFieldDriverFactory } from './TextField.driver';
import { TextField } from '.';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { textFieldTestkitFactory } from '../../testkit';
import { textFieldTestkitFactory as enzymeTextFieldTestkitFactory } from '../../testkit/enzyme';
import { TextFieldTheme } from './TextFieldEnums';
import { ReactComponent as Calendar } from '../../assets/icons/Calendar.svg';

describe('TextField', () => {
  const createDriver = createDriverFactory(textFieldDriverFactory);

  it('should render', () => {
    const value = 'hello!';
    const driver = createDriver(<TextField value={value} />);
    expect(driver.getValue()).toEqual(value);
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(<TextField />, textFieldTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <TextField />,
          enzymeTextFieldTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });

  describe('TextFieldTestKit', () => {
    let ref: React.RefObject<TextField>;
    ref = React.createRef();

    it('should getTheme', function () {
      const driverLine = createDriver(
        <TextField value={'Theme Test'} theme={TextFieldTheme.Line} />,
      );
      const driverBox = createDriver(
        <TextField value={'Theme Test'} theme={TextFieldTheme.Box} />,
      );
      expect(driverLine.getTheme()).toBe(TextFieldTheme.Line);
      expect(driverBox.getTheme()).toBe(TextFieldTheme.Box);
    });

    it('should isSuccess', function () {
      const driver = createDriver(<TextField success value={'Theme Test'} />);
      expect(driver.isSuccess()).toBe(true);
    });

    it('should isSuccess with success icon', async () => {
      const driver = createDriver(
        <TextField success successIcon value={'Theme Test'} />,
      );
      expect(driver.isSuccess()).toEqual(true);
      expect(driver.isSuccessIconExist()).toEqual(true);
    });

    it('should trigger focus', () => {
      const driver = createDriver(
        <TextField ref={ref} success successIcon value={'Theme Test'} />,
      );
      expect(driver.isFocused()).toEqual(false);
      ref.current.focus();
      expect(driver.isFocused()).toEqual(true);
    });

    it('should trigger blur', () => {
      const driver = createDriver(
        <TextField ref={ref} success successIcon value={'Theme Test'} />,
      );
      ref.current.focus();
      expect(driver.isFocused()).toEqual(true);
      ref.current.blur();
      expect(driver.isFocused()).toEqual(false);
    });

    it('should getErrorMessage', function () {
      const driver = createDriver(
        <TextField error errorMessage={'ErrorMessage'} value={'Theme Test'} />,
      );
      expect(driver.isError()).toBe(true);
      expect(driver.getErrorMessage()).toBe('ErrorMessage');
    });

    it('should hasEmptyState', function () {
      const emptyStateDriver = createDriver(
        <TextField error errorMessage={'ErrorMessage'} value={''} />,
      );
      expect(emptyStateDriver.hasEmptyState()).toBe(true);
      const notEmptyStateDriver = createDriver(
        <TextField error errorMessage={'ErrorMessage'} value={'Some data'} />,
      );
      expect(notEmptyStateDriver.hasEmptyState()).toBe(false);
    });

    it('should onChange', function () {
      const onChange = jest.fn();
      const driver = createDriver(
        <TextField onChange={onChange} value={'Test'} />,
      );
      driver.setValue('Test 1');
      expect(onChange.mock.calls[0][0].target.value).toBe('Test 1');
    });

    it('should disabled work', function () {
      const onChange = jest.fn();
      const disabledStateDriver = createDriver(
        <TextField disabled onChange={onChange} value={'Test'} />,
      );
      const regularStateDriver = createDriver(
        <TextField onChange={onChange} value={'Test'} />,
      );
      expect(disabledStateDriver.isDisabled()).toBe(true);
      expect(regularStateDriver.isDisabled()).toBe(false);
    });

    it('should has clear button', function () {
      const emptyStateDriver = createDriver(
        <TextField withClearButton value="text" />,
      );
      expect(emptyStateDriver.hasClearButton()).toBe(true);
    });

    it('should not have clear button when the input is empty', function () {
      const emptyStateDriver = createDriver(
        <TextField withClearButton value="" />,
      );
      expect(emptyStateDriver.hasClearButton()).toBe(false);
    });

    it('should call onClear after clicking on the clear button', function () {
      const onClear = jest.fn();
      const driver = createDriver(
        <TextField withClearButton onClear={onClear} value="text" />,
      );
      driver.clickOnClearButton();
      expect(onClear).toHaveBeenCalled();
    });

    it('should has custom suffix', function () {
      const emptyStateDriver = createDriver(
        <TextField value="hello" suffix={<Calendar />} />,
      );
      expect(emptyStateDriver.hasCustomSuffix()).toBe(true);
    });

    it('should not have custom suffix', function () {
      const emptyStateDriver = createDriver(<TextField value="hello" />);
      expect(emptyStateDriver.hasCustomSuffix()).toBe(false);
    });
  });
});
