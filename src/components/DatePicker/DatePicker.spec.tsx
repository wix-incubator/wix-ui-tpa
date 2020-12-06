import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { datePickerDriverFactory } from './DatePicker.driver';
import { datePickerTestkitFactory } from '../../testkit';
import { datePickerTestkitFactory as enzymeDatePickerTestkitFactory } from '../../testkit/enzyme';
// import { TPAComponentsProvider, TPAComponentsConfig } from '../TPAComponentsConfig';
import { DatePicker, DatePickerProps } from './';

describe('DatePicker', () => {
  const createDriver = createUniDriverFactory(datePickerDriverFactory);

  const bootstrap = (props = {}) => {
    const dataHook = '';
    const compProps = {
      'data-hook': dataHook,
          value: new Date(),
      onChange: selectedDays => {},
      ...props,
    };
    return createDriver(
      // <TPAComponentsProvider value={contextProps}>
      <DatePicker {...compProps} />,
      // </TPAComponentsProvider>
    );
  };

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<DatePicker onChange={(selectedDays)=>{}} />, datePickerTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <DatePicker onChange={(selectedDays)=>{}} />,
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
