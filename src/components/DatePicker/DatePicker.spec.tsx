import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { datePickerDriverFactory } from './DatePicker.driver';
import { datePickerTestkitFactory } from '../../testkit';
import { datePickerTestkitFactory as enzymeDatePickerTestkitFactory } from '../../testkit/enzyme';
// import { TPAComponentsProvider, TPAComponentsConfig } from '../TPAComponentsConfig';
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

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<DatePicker onChange={()=>{}} />, datePickerTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <DatePicker onChange={()=>{}} />,
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
