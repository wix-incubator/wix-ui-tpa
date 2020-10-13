import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { modalDriverFactory } from './Modal.driver';
import { Modal } from './index';

describe('Modal', () => {
  const createDriver = createUniDriverFactory(modalDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Modal isOpen focusTrap={false} />);
    expect(await driver.exists()).toBe(true);
  });
});
