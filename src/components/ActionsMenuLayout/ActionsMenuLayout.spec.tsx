import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { actionsMenuLayoutDriverFactory } from './ActionsMenuLayout.driver';
import { ActionsMenuLayout } from './';
import { actionsMenuLayoutTestkitFactory } from '../../testkit';
import { actionsMenuLayoutTestkitFactory as enzymeActionsMenuLayoutTestkitFactory } from '../../testkit/enzyme';
import { KEYS } from '../../common/keyCodes';

describe('ActionsMenuLayout', () => {
  const createDriver = createUniDriverFactory(actionsMenuLayoutDriverFactory);

  it('should render', async () => {
    const driver = createDriver(
      <ActionsMenuLayout>
        <ActionsMenuLayout.Item onClick={() => {}} content="test" />
      </ActionsMenuLayout>,
    );
    expect(await driver.exists()).toBe(true);
  });

  it('should trigger onClick', async function () {
    const onClick = jest.fn();
    const driver = createDriver(
      <ActionsMenuLayout>
        <ActionsMenuLayout.Item onClick={onClick} content="test" />
      </ActionsMenuLayout>,
    );

    await driver.clickItem('test');
    expect(onClick).toHaveBeenCalled();
  });

  it('should not focus first element if focusedIndex is not provided', async function () {
    const driver = createDriver(
      <ActionsMenuLayout>
        <ActionsMenuLayout.Item onClick={() => {}} content="test" />
      </ActionsMenuLayout>,
    );

    expect(await driver.isItemFocused('test')).toEqual(false);
  });

  it('should focus 2nd element if focusedIndex=1', async function () {
    const driver = createDriver(
      <ActionsMenuLayout focusedIndex={1}>
        <ActionsMenuLayout.Item onClick={() => {}} content="test1" />
        <ActionsMenuLayout.Item onClick={() => {}} content="test2" />
      </ActionsMenuLayout>,
    );

    expect(await driver.isItemFocused('test2')).toEqual(true);
  });

  it('should navigate by keyboard keys', async function () {
    const driver = createDriver(
      <ActionsMenuLayout focusedIndex={1}>
        <ActionsMenuLayout.Item onClick={() => {}} content="test1" />
        <ActionsMenuLayout.Item onClick={() => {}} content="test2" />
        <ActionsMenuLayout.Item onClick={() => {}} content="test3" />
      </ActionsMenuLayout>,
    );

    const layout = driver.layout();

    expect(await driver.isItemFocused('test2')).toEqual(true);

    await layout.pressKey(KEYS.ArrowDown);

    expect(await driver.isItemFocused('test3')).toEqual(true);
    await layout.pressKey(KEYS.ArrowDown);

    expect(await driver.isItemFocused('test1')).toEqual(true);

    await layout.pressKey(KEYS.ArrowUp);
    expect(await driver.isItemFocused('test3')).toEqual(true);
  });

  it('should fire onClick on space and enter keys', async function () {
    const onClick = jest.fn();

    const driver = createDriver(
      <ActionsMenuLayout>
        <ActionsMenuLayout.Item onClick={onClick} content="test1" />
      </ActionsMenuLayout>,
    );

    const item = driver.item('test1');

    await item.pressKey(KEYS.Spacebar);
    await item.pressKey(KEYS.Enter);

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(
        <ActionsMenuLayout>
          <ActionsMenuLayout.Item onClick={() => {}} content="test" />
        </ActionsMenuLayout>,
      ),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <ActionsMenuLayout>
            <ActionsMenuLayout.Item onClick={() => {}} content="test" />
          </ActionsMenuLayout>,
          actionsMenuLayoutTestkitFactory,
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
          <ActionsMenuLayout>
            <ActionsMenuLayout.Item onClick={() => {}} content="test" />
          </ActionsMenuLayout>,
          enzymeActionsMenuLayoutTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
