import * as React from 'react';
import { Simulate } from 'react-dom/test-utils';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { textAreaDriverFactory } from './TextArea.driver';
import { TextArea, TextAreaTheme } from './';

describe('TextArea', () => {
  const createDriver = createUniDriverFactory(textAreaDriverFactory);
  it('should render supplied value and placeholder', async () => {
    const onChange = jest.fn();
    const driver = createDriver(
      <TextArea
        ariaLabel={'test'}
        value={'Test'}
        onChange={onChange}
        placeholder={'Placeholder'}
      />,
    );
    expect(await driver.value()).toBe('Test');
    expect(await driver.placeholder()).toBe('Placeholder');
  });

  it('should hide success icon by default', async function () {
    const onChange = jest.fn();
    const driver = createDriver(
      <TextArea
        ariaLabel={'test'}
        value={'Test'}
        onChange={onChange}
        placeholder={'Placeholder'}
      />,
    );
    expect(await driver.success()).toBe(false);
  });

  it('should trigger onChange', async function () {
    const onChange = jest.fn((e) => {
      expect(e.target.value).toBe('Test 1');
    });
    const driver = createDriver(
      <TextArea
        ariaLabel={'test'}
        value={'Test'}
        onChange={onChange}
        placeholder={'Placeholder'}
        disabled={false}
      />,
    );

    await driver.typeText('Test 1');
    expect(await driver.disabled()).toBe(false);
    expect(onChange).toHaveBeenCalled();
  });

  it('should not trigger onChange when disabled', async function () {
    const onChange = jest.fn();
    const driver = createDriver(
      <TextArea
        ariaLabel={'test'}
        value={'Test'}
        onChange={onChange}
        placeholder={'Placeholder'}
        disabled
      />,
    );

    await driver.typeText('Test 1');
    expect(await driver.disabled()).toBe(true);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should be able to show success icon', async function () {
    const onChange = jest.fn();
    const driver = createDriver(
      <TextArea
        ariaLabel={'test'}
        value={'Test'}
        onChange={onChange}
        placeholder={'Placeholder'}
        success
      />,
    );
    expect(await driver.success()).toBe(true);
  });

  it('should provide default theme', async function () {
    const onChange = jest.fn();
    const driver = createDriver(
      <TextArea
        ariaLabel={'test'}
        value={'Test'}
        onChange={onChange}
        placeholder={'Placeholder'}
        success
      />,
    );
    expect(await driver.theme()).toBe(TextAreaTheme.Box);
  });

  it('should accept theme', async function () {
    const onChange = jest.fn();
    const driver = createDriver(
      <TextArea
        ariaLabel={'test'}
        value={'Test'}
        onChange={onChange}
        theme={TextAreaTheme.Line}
        placeholder={'Placeholder'}
      />,
    );
    expect(await driver.theme()).toBe(TextAreaTheme.Line);
  });

  it('should hide error by default', async function () {
    const onChange = jest.fn();
    const driver = createDriver(
      <TextArea ariaLabel={'test'} value={'Test'} onChange={onChange} />,
    );
    expect(await driver.error()).toBe(false);
  });

  it('should show error with icon and description', async function () {
    const onChange = jest.fn();
    const driver = createDriver(
      <TextArea
        ariaLabel={'test'}
        error
        value={'Test'}
        onChange={onChange}
        errorDescription={'description'}
      />,
    );
    expect(await driver.error()).toBe(true);
    expect(await driver.errorIcon()).toBe(true);
  });

  it('should not show error icon in case when error description is not provided', async function () {
    const onChange = jest.fn();
    const driver = createDriver(
      <TextArea ariaLabel={'test'} error value={'Test'} onChange={onChange} />,
    );
    expect(await driver.error()).toBe(true);
    expect(await driver.errorIcon()).toBe(false);
  });

  it('should handle blur event', async function () {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const driver = createDriver(
      <TextArea
        ariaLabel="test"
        value="Test"
        onChange={onChange}
        onBlur={onBlur}
      />,
    );
    const textarea = await driver.getTextareaElement();
    Simulate.blur(textarea);
    expect(onBlur).toBeCalled();
  });
});
