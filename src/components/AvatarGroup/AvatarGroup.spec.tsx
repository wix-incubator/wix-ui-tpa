import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { avatarGroupDriverFactory } from './AvatarGroup.driver';
import { AvatarGroup } from './';
import { avatarGroupTestkitFactory } from '../../testkit';
import { avatarGroupTestkitFactory as enzymeAvatarGroupTestkitFactory } from '../../testkit/enzyme';

describe('AvatarGroup', () => {
  const createDriver = createUniDriverFactory(avatarGroupDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<AvatarGroup />);
    expect(await driver.exists()).toBe(true);
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

  const items = [
    {},
    { name: 'anonymous' },
    { name: 'Eve', src: 'https://randomuser.me/api/portraits/women/87.jpg' },
    { name: 'John', src: 'https://randomuser.me/api/portraits/men/69.jpg' },
  ];

  it('should render no more than 5 Avatars in the group by default', async () => {
    const driver = createDriver(
      <AvatarGroup items={[...items, ...items, ...items]} />,
    );
    expect(await driver.getAvatarCount()).toBe(5);
  });

  it('should render no more than maxAmount Avatars in group', async () => {
    const driver = createDriver(
      <AvatarGroup maxAmount={9} items={[...items, ...items, ...items]} />,
    );

    expect(await driver.getAvatarCount()).toBe(9);
  });
});
