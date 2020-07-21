import { mount } from 'enzyme';
import * as React from 'react';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { sectionNotificationTestkitFactory } from '../../testkit';
import { sectionNotificationTestkitFactory as enzymeSectionNotificationTestkitFactory } from '../../testkit/enzyme';
import { SectionNotification } from './';
import { sectionNotificationDriverFactory } from './SectionNotification.driver';
import { NOTIFICATION_TYPE } from './types';

const props = {
  icon: <svg>ErrorIcon</svg>,
  text: `You will be redirected to payment provider's page.`,
  type: NOTIFICATION_TYPE.default,
  buttonTitle: 'Proceed',
};

describe('SectionNotification', () => {
  const createDriver = createUniDriverFactory(sectionNotificationDriverFactory);

  it('should render', async () => {
    const driver = createDriver(
      <SectionNotification>
        <SectionNotification.Text>{props.text}</SectionNotification.Text>
      </SectionNotification>,
    );

    expect(await driver.exists()).toBe(true);
  });

  it('should render notification with content', async () => {
    const driver = createDriver(
      <SectionNotification>
        <SectionNotification.Icon icon={props.icon} />
        <SectionNotification.Text>{props.text}</SectionNotification.Text>
        <SectionNotification.Button>
          {props.buttonTitle}
        </SectionNotification.Button>
      </SectionNotification>,
    );

    expect(await driver.getText()).toEqual(props.text);
    expect(await driver.hasButtons()).toBe(true);
    expect(await driver.hasIcon()).toBe(true);
  });

  it('should render notification of type Error', async () => {
    const driver = createDriver(
      <SectionNotification type={NOTIFICATION_TYPE.error}>
        <SectionNotification.Text>{props.text}</SectionNotification.Text>
      </SectionNotification>,
    );

    expect(await driver.isError()).toBe(true);
  });

  it('should render notification of type Alert', async () => {
    const driver = createDriver(
      <SectionNotification type={NOTIFICATION_TYPE.alert}>
        <SectionNotification.Text>{props.text}</SectionNotification.Text>
      </SectionNotification>,
    );

    expect(await driver.isAlert()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <SectionNotification>
            <SectionNotification.Text>{props.text}</SectionNotification.Text>
          </SectionNotification>,
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
          <SectionNotification>
            <SectionNotification.Text>{props.text}</SectionNotification.Text>
          </SectionNotification>,
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
