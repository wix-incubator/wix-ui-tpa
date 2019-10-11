import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { actionsMenuDriverFactory } from './ActionsMenu.driver';
import { ActionsMenu } from './';
import { actionsMenuTestkitFactory } from '../../testkit';
import { actionsMenuTestkitFactory as enzymeActionsMenuTestkitFactory } from '../../testkit/enzyme';

describe('ActionsMenu', () => {
  const createDriver = createUniDriverFactory(actionsMenuDriverFactory);

  it('should render', async () => {
    const driver = createDriver(
      <ActionsMenu>
        <ActionsMenu.Item onClick={() => {}} content="test" />
      </ActionsMenu>,
    );
    expect(await driver.exists()).toBe(true);
  });

  it('should trigger onClick', async function() {
    const onClick = jest.fn();
    const driver = createDriver(
      <ActionsMenu>
        <ActionsMenu.Item onClick={onClick} content="test" />
      </ActionsMenu>,
    );

    await driver.clickItem('test');
    expect(onClick).toHaveBeenCalled();
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(
        <ActionsMenu>
          <ActionsMenu.Item onClick={() => {}} content="test" />
        </ActionsMenu>,
      ),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <ActionsMenu>
            <ActionsMenu.Item onClick={() => {}} content="test" />
          </ActionsMenu>,
          actionsMenuTestkitFactory,
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
          <ActionsMenu>
            <ActionsMenu.Item onClick={() => {}} content="test" />
          </ActionsMenu>,
          enzymeActionsMenuTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
