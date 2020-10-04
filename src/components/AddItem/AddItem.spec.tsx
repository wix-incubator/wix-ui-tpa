import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { addItemDriverFactory } from './AddItem.driver';
import { AddItem } from './';
import { addItemTestkitFactory } from '../../testkit';
import { addItemTestkitFactory as enzymeAddItemTestkitFactory } from '../../testkit/enzyme';

describe('AddItem', () => {
  const createDriver = createUniDriverFactory(addItemDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<AddItem buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<AddItem />),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<AddItem />, addItemTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <AddItem />,
          enzymeAddItemTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
