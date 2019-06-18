import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { iconToggleDriverFactory } from './IconToggle.driver';
import { IconToggle } from './';
import { iconToggleTestkitFactory } from '../../testkit';
import { iconToggleTestkitFactory as enzymeIconToggleTestkitFactory } from '../../testkit/enzyme';

describe('IconToggle', () => {
  const createDriver = createUniDriverFactory(iconToggleDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<IconToggle buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<IconToggle />),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<IconToggle />, iconToggleTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <IconToggle />,
          enzymeIconToggleTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
