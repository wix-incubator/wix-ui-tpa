import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { socialBarDriverFactory } from './SocialBar.driver';
import { SocialBar } from './';
import { socialBarTestkitFactory } from '../../testkit';
import { socialBarTestkitFactory as enzymeSocialBarTestkitFactory } from '../../testkit/enzyme';

describe('SocialBar', () => {
  const createDriver = createUniDriverFactory(socialBarDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<SocialBar />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<SocialBar />, socialBarTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <SocialBar />,
          enzymeSocialBarTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
