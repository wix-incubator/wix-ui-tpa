import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { counterBadgeDriverFactory } from './CounterBadge.driver';
import { CounterBadge } from './';
import { counterBadgeTestkitFactory } from '../../testkit';
import { counterBadgeTestkitFactory as enzymeCounterBadgeTestkitFactory } from '../../testkit/enzyme';

describe('CounterBadge', () => {
  const createDriver = createUniDriverFactory(counterBadgeDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<CounterBadge buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<CounterBadge />, counterBadgeTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <CounterBadge />,
          enzymeCounterBadgeTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
