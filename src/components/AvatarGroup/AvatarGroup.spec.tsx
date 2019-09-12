import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { avatarGroupDriverFactory } from './AvatarGroup.driver';
import { AvatarGroup } from './';
import { avatarGroupTestkitFactory } from '../../testkit';
import { avatarGroupTestkitFactory as enzymeAvatarGroupTestkitFactory } from '../../testkit/enzyme';
import { TextButton } from '../TextButton';

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

  describe('optional text button', () => {
    it('should have optional text button', async () => {
      const onClick = jest.fn();
      const driver = createDriver(
        <AvatarGroup items={[...items]}>
          <AvatarGroup.TextButton onClick={onClick}>
            Link
          </AvatarGroup.TextButton>
        </AvatarGroup>,
      );
      expect(await driver.textButton.exists()).toBe(true);
      await driver.textButton.click();
      expect(onClick).toHaveBeenCalled();
    });

    it('should accept regular TextButton', async () => {
      const onClick = jest.fn();
      const driver = createDriver(
        <AvatarGroup items={[...items]}>
          <TextButton onClick={onClick}>Link</TextButton>
        </AvatarGroup>,
      );
      await driver.textButton.click();
      expect(onClick).toHaveBeenCalled();
    });

    it('should pass props on to TextButton', async () => {
      const driver = createDriver(
        <AvatarGroup items={[...items]}>
          <AvatarGroup.TextButton as="a" href="https://some-url.com">
            Link
          </AvatarGroup.TextButton>
        </AvatarGroup>,
      );
      expect((await driver.textButton.element()).getAttribute('href')).toBe(
        'https://some-url.com',
      );
      expect((await driver.textButton.element()).tagName.toLowerCase()).toBe(
        'a',
      );
    });

    it('should ignore anything else than (AvatarGroup.)TextButton', async () => {
      const driver = createDriver(
        <AvatarGroup items={[...items]}>
          <div>Imposter</div>
          Another imposter
        </AvatarGroup>,
      );
      expect(await driver.textButton.exists()).toBe(false);
    });
  });
});
