import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { simpleDatePickerDriverFactory } from './SimpleDatePicker.driver';
import { simpleDatePickerTestkitFactory } from '../../testkit';
import { simpleDatePickerTestkitFactory as enzymeSimpleDatePickerTestkitFactory } from '../../testkit/enzyme';
// import { TPAComponentsProvider, TPAComponentsConfig } from '../TPAComponentsConfig';
import { SimpleDatePicker, SimpleDatePickerProps } from './';

describe('SimpleDatePicker', () => {
  const createDriver = createUniDriverFactory(simpleDatePickerDriverFactory);

  const bootstrap = (props: Partial<SimpleDatePickerProps> = {}/*, contextProps: TPAComponentsConfig = {}*/) => {
    return createDriver(
      // <TPAComponentsProvider value={contextProps}>
        <SimpleDatePicker {...props} />
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
        await isUniTestkitExists(<SimpleDatePicker />, simpleDatePickerTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <SimpleDatePicker />,
          enzymeSimpleDatePickerTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
