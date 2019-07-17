import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { badgeDriverFactory } from './Badge.driver';
import { Badge } from './';
import { badgeTestkitFactory } from '../../testkit';
import { badgeTestkitFactory as enzymeBadgeTestkitFactory } from '../../testkit/enzyme';

describe('Badge', () => {
  const createDriver = createUniDriverFactory(badgeDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Badge>I'm default badge</Badge>);
    expect(await driver.exists()).toBe(true);
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
