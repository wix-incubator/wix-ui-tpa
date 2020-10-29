import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { datePickerDriverFactory } from './DatePicker.driver';
import { DatePicker } from './';
import { datePickerTestkitFactory } from '../../testkit';
import { datePickerTestkitFactory as enzymeDatePickerTestkitFactory } from '../../testkit/enzyme';

describe('DatePicker', () => {
  const createDriver = createUniDriverFactory(datePickerDriverFactory);

  it('should render', async () => {
    const driver = createDriver(
      <DatePicker value={new Date()} onChange={() => {}} />,
    );
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <DatePicker value={new Date()} onChange={() => {}} />,
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
          <DatePicker value={new Date()} onChange={() => {}} />,
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
