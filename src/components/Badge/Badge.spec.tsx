import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { badgeDriverFactory } from './Badge.driver';
import { Badge, BADGE_PRIORITY } from './';
import { badgeTestkitFactory } from '../../testkit';
import { badgeTestkitFactory as enzymeBadgeTestkitFactory } from '../../testkit/enzyme';
import { ReactComponent as CameraIcon } from '../../assets/icons/Camera.svg';

describe('Badge', () => {
  const createDriver = createUniDriverFactory(badgeDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Badge>I'm badge</Badge>);
    expect(await driver.exists()).toBe(true);
  });

  describe('Priorities', () => {
    it('should render default badge', async () => {
      const driver = createDriver(
        <Badge priority={BADGE_PRIORITY.default}>I'm default badge</Badge>,
      );
      expect(await driver.isDefault()).toBeTruthy();
      expect(await driver.exists()).toBe(true);
    });
    it('should render light badge', async () => {
      const driver = createDriver(
        <Badge priority={BADGE_PRIORITY.light}>I'm light badge</Badge>,
      );
      expect(await driver.isLight()).toBeTruthy();
      expect(await driver.exists()).toBe(true);
    });
    it('should render primary badge', async () => {
      const driver = createDriver(
        <Badge priority={BADGE_PRIORITY.primary}>I'm primary badge</Badge>,
      );
      expect(await driver.isPrimary()).toBeTruthy();
      expect(await driver.exists()).toBe(true);
    });
    it('should render badge with icon', async () => {
      const icon = <CameraIcon />;
      const driver = createDriver(<Badge icon={icon}>I'm primary badge</Badge>);
      expect(await driver.hasIcon()).toBe(true);
    });
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Badge>Badge</Badge>, badgeTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Badge />,
          enzymeBadgeTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
