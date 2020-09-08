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
    const driver = createDriver(<Modal isOpen focusTrap={false} />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Modal isOpen focusTrap={false} />,
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
          <Modal isOpen focusTrap={false} />,
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
