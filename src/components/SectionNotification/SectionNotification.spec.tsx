import { mount } from 'enzyme';
import * as React from 'react';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { TPAComponentsWrapper } from '../../test/utils';
import { sectionNotificationTestkitFactory } from '../../testkit';
import { sectionNotificationTestkitFactory as enzymeSectionNotificationTestkitFactory } from '../../testkit/enzyme';
import { SectionNotification } from './';
import { sectionNotificationDriverFactory } from './SectionNotification.driver';
import { NOTIFICATION_TYPE } from './types';

const props = {
  icon: <svg>ErrorIcon</svg>,
  text: `You will be redirected to payment provider's page.`,
  type: NOTIFICATION_TYPE.default,
  controls: <button>Proceed</button>,
};

describe('SectionNotification', () => {
  const createDriver = createUniDriverFactory(sectionNotificationDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<SectionNotification text={props.text} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should render notification with content', async () => {
    const driver = createDriver(<SectionNotification {...props} />);

    expect(await driver.getText()).toEqual(props.text);
    expect(await driver.hasControls()).toBe(true);
    expect(await driver.hasIcon()).toBe(true);
  });

  it('should render notification of type Error', async () => {
    const driver = createDriver(
      <SectionNotification {...props} type={NOTIFICATION_TYPE.error} />,
    );

    expect(await driver.isError()).toBe(true);
  });

  it('should not render controls for type Error', async () => {
    const driver = createDriver(
      <SectionNotification {...props} type={NOTIFICATION_TYPE.error} />,
    );

    expect(await driver.isError()).toBe(true);
    expect(await driver.hasControls()).toBe(false);
  });

  it('should render notification for Mobile', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(
        <SectionNotification {...props} />,
      ),
    );

    expect(await driver.isMobile()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <SectionNotification {...props} />,
          sectionNotificationTestkitFactory,
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
          <SectionNotification {...props} />,
          enzymeSectionNotificationTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
