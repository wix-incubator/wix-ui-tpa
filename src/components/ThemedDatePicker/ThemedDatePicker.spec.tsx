import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { themedDatePickerDriverFactory } from './ThemedDatePicker.driver';
import { themedDatePickerTestkitFactory } from '../../testkit';
import { themedDatePickerTestkitFactory as enzymeThemedDatePickerTestkitFactory } from '../../testkit/enzyme';
// import { TPAComponentsProvider, TPAComponentsConfig } from '../TPAComponentsConfig';
import { ThemedDatePicker, ThemedDatePickerProps } from './';

describe('ThemedDatePicker', () => {
  const createDriver = createUniDriverFactory(themedDatePickerDriverFactory);

  const bootstrap = (
    props: Partial<
      ThemedDatePickerProps
    > = {} /*, contextProps: TPAComponentsConfig = {}*/,
  ) => {
    return createDriver(
      // <TPAComponentsProvider value={contextProps}>
      <ThemedDatePicker {...props} />,
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
        await isUniTestkitExists(
          <ThemedDatePicker />,
          themedDatePickerTestkitFactory,
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
          <ThemedDatePicker />,
          enzymeThemedDatePickerTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
