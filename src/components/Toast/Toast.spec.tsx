import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { toastDriverFactory } from './Toast.driver';
import { Toast } from './';
import { toastTestkitFactory } from '../../testkit';
import { toastTestkitFactory as enzymeToastTestkitFactory } from '../../testkit/enzyme';
import { TOAST_SKIN } from './types';

describe('Toast', () => {
  const createDriver = createUniDriverFactory(toastDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Toast skin={TOAST_SKIN.success} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(
        <Toast skin={TOAST_SKIN.success} />,
      ),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  it('should render toast message correctly', async () => {
    const message = 'test toast message';
    const driver = createDriver(
      <Toast skin={TOAST_SKIN.success}>{message}</Toast>,
    );
    const messageDriver = await driver.getMessage();
    expect(await messageDriver.exists()).toBeTruthy();
    expect(await messageDriver.text()).toBe(message);
  });

  describe('Animated toast', () => {
    it('should be visible', async () => {
      const driver = createDriver(
        <Toast skin={TOAST_SKIN.success} shouldAnimate isShown />,
      );
      expect(await driver.isShown()).toBeTruthy();
    });

    it('should be invisible', async () => {
      const driver = createDriver(
        <Toast skin={TOAST_SKIN.success} shouldAnimate isShown={false} />,
      );
      expect(await driver.isShown()).toBeFalsy();
    });
  });

  describe('Close button', () => {
    it('should render WITHOUT close button by default', async () => {
      const driver = createDriver(<Toast skin={TOAST_SKIN.success} />);
      expect(await driver.isCloseButtonExists()).toBeFalsy();
    });

    it('should render with close button', async () => {
      const driver = createDriver(
        <Toast skin={TOAST_SKIN.success} shouldShowCloseButton />,
      );
      expect(await driver.isCloseButtonExists()).toBeTruthy();
    });

    it('should call onClose callback when on close button click', async () => {
      const onClose = jest.fn();
      const driver = createDriver(
        <Toast
          skin={TOAST_SKIN.success}
          shouldShowCloseButton
          onClose={onClose}
        />,
      );
      await (await driver.getCloseButton()).click();
      expect(onClose).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'click',
        }),
      );
    });

    it('should NOT call onClose callback when click outside close button', async () => {
      const onClose = jest.fn();
      const driver = createDriver(
        <Toast
          skin={TOAST_SKIN.success}
          shouldShowCloseButton
          onClose={onClose}
        />,
      );
      await driver.click();
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('Skins', () => {
    it('should render toast with successful skin', async () => {
      const driver = createDriver(<Toast skin={TOAST_SKIN.success} />);
      expect(await driver.isSuccess()).toBeTruthy();
      expect(await driver.isError()).toBeFalsy();
      expect(await driver.isStatus()).toBeFalsy();
      expect(await driver.exists()).toBe(true);
    });

    it('should render toast with error skin', async () => {
      const driver = createDriver(<Toast skin={TOAST_SKIN.error} />);
      expect(await driver.isSuccess()).toBeFalsy();
      expect(await driver.isError()).toBeTruthy();
      expect(await driver.isStatus()).toBeFalsy();
      expect(await driver.exists()).toBe(true);
    });

    it('should render toast with status skin', async () => {
      const driver = createDriver(<Toast skin={TOAST_SKIN.status} />);
      expect(await driver.isSuccess()).toBeFalsy();
      expect(await driver.isError()).toBeFalsy();
      expect(await driver.isStatus()).toBeTruthy();
      expect(await driver.exists()).toBe(true);
    });
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Toast skin={TOAST_SKIN.success} />,
          toastTestkitFactory,
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
          <Toast skin={TOAST_SKIN.success} />,
          enzymeToastTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
