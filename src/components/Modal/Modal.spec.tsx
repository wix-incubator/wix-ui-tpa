import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { modalDriverFactory } from './Modal.driver';
import { Modal } from './';
import { modalTestkitFactory } from '../../testkit';
import { modalTestkitFactory as enzymeModalTestkitFactory } from '../../testkit/enzyme';

describe('Modal', () => {
  const createDriver = createUniDriverFactory(modalDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Modal isOpen onRequestClose={null} />);
    expect(await driver.exists()).toBeTruthy();
  });

  it('should be close', async () => {
    const driver = createDriver(<Modal isOpen={false} onRequestClose={null} />);
    expect(await driver.exists()).toBeFalsy();
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(
        <Modal isOpen onRequestClose={null} />,
      ),
    );
    expect(await driver.isMobile()).toBeTruthy();
  });

  it('should not render close icon button', async () => {
    const driver = createDriver(
      <Modal isOpen withCloseButton={false} onRequestClose={null} />,
    );
    const closeButtonDriver = await driver.getCloseButtonDriver();
    expect(await closeButtonDriver.exists()).toBeFalsy();
  });

  it('should call onRequestClose when click on close icon', async () => {
    const onRequestCloseSpy = jest.fn();
    const driver = createDriver(
      <Modal isOpen onRequestClose={onRequestCloseSpy} />,
    );
    const closeButtonDriver = await driver.getCloseButtonDriver();
    expect(await closeButtonDriver.exists()).toBeTruthy();
    await closeButtonDriver.click();
    expect(onRequestCloseSpy).toBeCalled();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Modal isOpen onRequestClose={null} />,
          modalTestkitFactory,
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
          <Modal isOpen onRequestClose={null} />,
          enzymeModalTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
