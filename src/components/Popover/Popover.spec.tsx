import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { popoverDriverFactory } from './Popover.driver';
import { popoverTestkitFactory } from '../../testkit';
import { popoverTestkitFactory as enzymePopoverTestkitFactory } from '../../testkit/enzyme';
// import { TPAComponentsProvider, TPAComponentsConfig } from '../TPAComponentsConfig';
import { Popover, PopoverProps } from './';

describe('Popover', () => {
  const createDriver = createUniDriverFactory(popoverDriverFactory);

  const bootstrap = (
    props: Partial<
      PopoverProps
    > = {} /*, contextProps: TPAComponentsConfig = {}*/,
  ) => {
    return createDriver(
      // <TPAComponentsProvider value={contextProps}>
      <Popover {...props} />,
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
        await isUniTestkitExists(<Popover />, popoverTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Popover />,
          enzymePopoverTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
