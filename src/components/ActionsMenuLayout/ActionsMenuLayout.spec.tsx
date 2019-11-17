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

  it('should trigger onClick', async function() {
    const onClick = jest.fn();
    const driver = createDriver(
      <ActionsMenuLayout>
        <ActionsMenuLayout.Item onClick={onClick} content="test" />
      </ActionsMenuLayout>,
    );

    await driver.clickItem('test');
    expect(onClick).toHaveBeenCalled();
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
