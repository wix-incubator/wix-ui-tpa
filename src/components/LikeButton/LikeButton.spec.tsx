import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { likeButtonDriverFactory } from './LikeButton.driver';
import { LikeButton } from './';
import { likeButtonTestkitFactory } from '../../testkit';
import { likeButtonTestkitFactory as enzymeLikeButtonTestkitFactory } from '../../testkit/enzyme';

describe('LikeButton', () => {
  const createDriver = createUniDriverFactory(likeButtonDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<LikeButton />);
    expect(await driver.exists()).toBe(true);
  });


  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<LikeButton />),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<LikeButton />, likeButtonTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <LikeButton />,
          enzymeLikeButtonTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
