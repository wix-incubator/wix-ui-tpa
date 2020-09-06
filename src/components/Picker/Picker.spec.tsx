import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { pickerDriverFactory } from './Picker.driver';
import { Picker } from './';
import { pickerTestkitFactory } from '../../testkit';
import { pickerTestkitFactory as enzymePickerTestkitFactory } from '../../testkit/enzyme';

const noop = () => {};
const defProps = {
  value: 'October 2020',
};

describe('Picker', () => {
  const createDriver = createUniDriverFactory(pickerDriverFactory);

  it('should render', async () => {
    const driver = createDriver(
      <Picker onPrev={noop} onNext={noop} {...defProps} />,
    );
    expect(await driver.exists()).toBe(true);
  });

  it('should show prev disabled state', async () => {
    const driver = createDriver(
      <Picker onPrev={noop} onNext={noop} prevDisabled {...defProps} />,
    );
    expect(await driver.hasDisablePrev()).toBe(true);
  });

  it('should show next disabled state', async () => {
    const driver = createDriver(
      <Picker onPrev={noop} onNext={noop} nextDisabled {...defProps} />,
    );
    expect(await driver.hasDisableNext()).toBe(true);
  });

  it('shold click next', async () => {
    const mockOnNext = jest.fn(noop);
    const driver = createDriver(
      <Picker onPrev={noop} onNext={mockOnNext} {...defProps} />,
    );
    await driver.clickOnNext();
    expect(mockOnNext).toHaveBeenCalled();
  });

  it('shold click prev', async () => {
    const mockOnPrev = jest.fn(noop);
    const driver = createDriver(
      <Picker onPrev={mockOnPrev} onNext={noop} {...defProps} />,
    );
    await driver.clickOnPrev();
    expect(mockOnPrev).toHaveBeenCalled();
  });

  it('shold have next aria label attribute', async () => {
    const nextAriaLabel = 'next';
    const driver = createDriver(
      <Picker
        nextAriaLabel={nextAriaLabel}
        onPrev={noop}
        onNext={noop}
        {...defProps}
      />,
    );
    expect(await driver.getNextAriaLabel()).toBe(nextAriaLabel);
  });

  it('shold have prev aria label attribute', async () => {
    const prevAriaLabel = 'prev';
    const driver = createDriver(
      <Picker
        prevAriaLabel={prevAriaLabel}
        onPrev={noop}
        onNext={noop}
        {...defProps}
      />,
    );
    expect(await driver.getPrevAriaLabel()).toBe(prevAriaLabel);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Picker onPrev={noop} onNext={noop} {...defProps} />,
          pickerTestkitFactory,
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
          <Picker onPrev={noop} onNext={noop} {...defProps} />,
          enzymePickerTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
