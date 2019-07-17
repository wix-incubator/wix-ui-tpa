import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { avatarGroupDriverFactory } from './AvatarGroup.driver';
import { AvatarGroup } from './';
import { avatarGroupTestkitFactory } from '../../testkit';
import { avatarGroupTestkitFactory as enzymeAvatarGroupTestkitFactory } from '../../testkit/enzyme';

describe('AvatarGroup', () => {
  const createDriver = createUniDriverFactory(avatarGroupDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<AvatarGroup items={[]} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<AvatarGroup />),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<AvatarGroup />, avatarGroupTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <AvatarGroup />,
          enzymeAvatarGroupTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
