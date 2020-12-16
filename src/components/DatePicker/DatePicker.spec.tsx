import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { datePickerDriverFactory } from './DatePicker.driver';
import { datePickerTestkitFactory } from '../../testkit';
import { datePickerTestkitFactory as enzymeDatePickerTestkitFactory } from '../../testkit/enzyme';
import { DatePicker } from './';

describe('DatePicker', () => {
  const createDriver = createUniDriverFactory(datePickerDriverFactory);

  const bootstrap = (props = {}) => {
    const dataHook = 'compDataHook';
    const compProps = {
      'data-hook': dataHook,
      onChange: () => {},
      ...props,
    };
    return createDriver(<DatePicker {...compProps} />);
  };

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  it('should display the correct selected date', async () => {
    const date = new Date(2019, 11, 15);
    const driver = bootstrap({ value: date });

    expect(await driver.getSelectedDay()).toBe('15');
    expect(await driver.getCurrentMonthWithYear()).toBe('December 2019');
  });

  it('should call onChange with the clicked day', async () => {
    const onChange = jest.fn();
    const date = new Date(2019, 11, 15);
    const driver = bootstrap({ value: date, onChange });

    expect(onChange).toHaveBeenCalledTimes(0);

    await driver.clickDay(new Date(2019, 11, 16));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].getDate()).toEqual(16);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <DatePicker onChange={() => {}} />,
          datePickerTestkitFactory,
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
          <DatePicker onChange={() => {}} />,
          enzymeDatePickerTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
