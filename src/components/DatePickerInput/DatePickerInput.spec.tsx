import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { datePickerInputDriverFactory } from './DatePickerInput.driver';
import { DatePickerInput } from './';
import { datePickerInputTestkitFactory } from '../../testkit';
import { datePickerInputTestkitFactory as enzymeDatePickerInputTestkitFactory } from '../../testkit/enzyme';

describe('DatePickerInput', () => {
  const createDriver = createUniDriverFactory(datePickerInputDriverFactory);

  it('should render', async () => {
    const driver = createDriver(
      <DatePickerInput value={new Date()} onChange={() => {}} />,
    );
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <DatePickerInput value={new Date()} onChange={() => {}} />,
          datePickerInputTestkitFactory,
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
          <DatePickerInput value={new Date()} onChange={() => {}} />,
          enzymeDatePickerInputTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
