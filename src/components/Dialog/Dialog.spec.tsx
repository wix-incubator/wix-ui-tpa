import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { dialogDriverFactory } from './Dialog.driver';
import { Dialog } from './';
import { dialogTestkitFactory } from '../../testkit';
import { dialogTestkitFactory as enzymeDialogTestkitFactory } from '../../testkit/enzyme';

describe('Dialog', () => {
  const createDriver = createUniDriverFactory(dialogDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Dialog />);
    expect(await driver.exists()).toBe(true);
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<Dialog />),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  it('expect dialog to be open', async () => {
    const driver = createDriver(<Dialog isOpen />);
    expect(await driver.isDialogOpen()).toBe(true);
  });

  it('expect dialog to be closed', async () => {
    const driver = createDriver(<Dialog isOpen={false} />);
    expect(await driver.isDialogOpen()).toBe(false);
  });

  it('should render children', async () => {
    const driver = createDriver(
      <Dialog isOpen>
        <div data-hook="dialog-children">Dialog children</div>
      </Dialog>,
    );
    expect(await driver.childExists('[data-hook="dialog-children"]')).toBe(
      true,
    );
  });

  it('expect onClick to be called after clicking on the close button', async () => {
    const onCloseButtonClick = jest.fn();
    const driver = createDriver(<Dialog isOpen onClose={onCloseButtonClick} />);

    await driver.clickOnCloseButton();
    expect(onCloseButtonClick).toHaveBeenCalledTimes(1);
  });

  describe('Manual Focus', () => {
    it('expect dialog to be open', async () => {
      const driver = createDriver(<Dialog manualFocus isOpen />);
      expect(await driver.isDialogOpen()).toBe(true);
    });

    it('expect dialog to be closed', async () => {
      const driver = createDriver(<Dialog manualFocus isOpen={false} />);
      expect(await driver.isDialogOpen()).toBe(false);
    });
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Dialog />, dialogTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Dialog />,
          enzymeDialogTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
