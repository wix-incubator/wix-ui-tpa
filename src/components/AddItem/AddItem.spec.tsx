import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { addItemDriverFactory } from './AddItem.driver';
import { AddItem } from './';
import { addItemTestkitFactory } from '../../testkit';
import { addItemTestkitFactory as enzymeAddItemTestkitFactory } from '../../testkit/enzyme';

describe('AddItem', () => {
  const createDriver = createUniDriverFactory(addItemDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<AddItem />);
    expect(await driver.exists()).toBe(true);
  });

  it('should add the correct text', async () => {
    const driver = createDriver(<AddItem>Add Item</AddItem>);
    expect(await driver.getText()).toBe('Add Item');
  });

  it('should call onClick function', async () => {
    const onClick = jest.fn();
    const driver = createDriver(<AddItem onClick={onClick}>AddItem</AddItem>);
    await driver.click();
    expect(onClick).toHaveBeenCalled();
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
