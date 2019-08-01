import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { toastDriverFactory } from './Toast.driver';
import { Toast, TOAST_SKIN } from './';
import { toastTestkitFactory } from '../../testkit';
import { toastTestkitFactory as enzymeToastTestkitFactory } from '../../testkit/enzyme';

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
