import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { CounterBadge, COUNTER_BADGE_PRIORITY } from './CounterBadge';
import { counterBadgeDriverFactory } from './CounterBadge.driver';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { badgeTestkitFactory as enzymeBadgeTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';

describe('CounterBadge', () => {
  const createDriver = createUniDriverFactory(counterBadgeDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<CounterBadge value={16} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should render the right value', async () => {
    const driver = createDriver(<CounterBadge value={6} />);

    expect((await driver.element()).textContent).toBe('6');
  });

  describe('testkit', () => {
    it('should render default badge', async () => {
      const driver = createDriver(
        <CounterBadge priority={COUNTER_BADGE_PRIORITY.default} value={8} />,
      );
      expect(await driver.isDefault()).toBeTruthy();
      expect(await driver.exists()).toBe(true);
    });
    it('should render light badge', async () => {
      const driver = createDriver(
        <CounterBadge priority={COUNTER_BADGE_PRIORITY.secondary} value={8} />,
      );
      expect(await driver.isSecondary()).toBeTruthy();
      expect(await driver.exists()).toBe(true);
    });
    it('should render primary badge', async () => {
      const driver = createDriver(
        <CounterBadge priority={COUNTER_BADGE_PRIORITY.primary} value={8} />,
      );
      expect(await driver.isPrimary()).toBeTruthy();
      expect(await driver.exists()).toBe(true);
    });
  });

  describe('priority', () => {});

  describe('maximum validation', () => {
    it('should default to 99 as maximum', async () => {
      const driver = createDriver(<CounterBadge value={132} />);

      expect((await driver.element()).textContent).toBe('+99');
    });

    it('should change maximum based on maximum props', async () => {
      const driver = createDriver(<CounterBadge maximum={50} value={132} />);

      expect((await driver.element()).textContent).toBe('+50');
    });
  });

  describe('validation', () => {
    it(`should present rounded down the prop value`, async () => {
      const driver = createDriver(<CounterBadge value={13.6} />);

      expect(await driver.exists()).toBe(true);
      expect((await driver.element()).textContent).toBe('13');
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <CounterBadge value={16} />,
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
