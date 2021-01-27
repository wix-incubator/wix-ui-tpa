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
    const driver = createDriver(<CounterBadge>16</CounterBadge>);
    expect(await driver.exists()).toBe(true);
  });

  it('should render the right value', async () => {
    const driver = createDriver(<CounterBadge>6</CounterBadge>);

    expect((await driver.element()).textContent).toBe('6');
  });

  describe('testkit', () => {
    it('should render default badge', async () => {
      const driver = createDriver(
        <CounterBadge priority={COUNTER_BADGE_PRIORITY.default}>
          8
        </CounterBadge>,
      );
      expect(await driver.isDefault()).toBeTruthy();
      expect(await driver.exists()).toBe(true);
    });
    it('should render light badge', async () => {
      const driver = createDriver(
        <CounterBadge priority={COUNTER_BADGE_PRIORITY.secondary}>
          8
        </CounterBadge>,
      );
      expect(await driver.isSecondary()).toBeTruthy();
      expect(await driver.exists()).toBe(true);
    });
    it('should render primary badge', async () => {
      const driver = createDriver(
        <CounterBadge priority={COUNTER_BADGE_PRIORITY.primary}>
          8
        </CounterBadge>,
      );
      expect(await driver.isPrimary()).toBeTruthy();
      expect(await driver.exists()).toBe(true);
    });
  });

  describe('priority', () => {});

  describe('maximum validation', () => {
    it('should default to 99 as maximum', async () => {
      const driver = createDriver(<CounterBadge>132</CounterBadge>);

      expect((await driver.element()).textContent).toBe('+99');
    });

    it('should change maximum based on maximum props', async () => {
      const driver = createDriver(
        <CounterBadge maximum={50}>132</CounterBadge>,
      );

      expect((await driver.element()).textContent).toBe('+50');
    });
  });
  describe('minimum validation', () => {
    it('should default to 0 as minimum', async () => {
      const driver = createDriver(<CounterBadge>0</CounterBadge>);

      expect((await driver.element()).textContent).toBe('0');
    });

    it('should default to 0 as minimum', async () => {
      const driver = createDriver(<CounterBadge minimum={1}>0</CounterBadge>);

      expect(await driver.exists()).toBe(false);
    });
  });
  describe('formating', () => {
    it('should remove space before the children', async () => {
      const driver = createDriver(<CounterBadge> 15</CounterBadge>);

      expect((await driver.element()).textContent).toBe('15');
    });

    it('should remove space before the children', async () => {
      const driver = createDriver(<CounterBadge>15 </CounterBadge>);

      expect((await driver.element()).textContent).toBe('15');
    });

    it('should remove thousents childrens commas', async () => {
      const driver = createDriver(
        <CounterBadge maximum={99999}>15,324</CounterBadge>,
      );

      expect((await driver.element()).textContent).toBe('15324');
    });
  });

  describe('validation', () => {
    ['stam', '123 432', '123,21', '32.5'].forEach((inputStr) => {
      it(`should hide counterBadge if children is not a valid rounded number with value ${inputStr}`, async () => {
        const driver = createDriver(<CounterBadge>{inputStr}</CounterBadge>);

        expect(await driver.exists()).toBe(false);
      });
    });

    ['23', '12,432', '  343 '].forEach((inputStr) => {
      it(`should present counterBadge if children is a valid rounded number with value ${inputStr}`, async () => {
        const driver = createDriver(<CounterBadge>{inputStr}</CounterBadge>);

        expect(await driver.exists()).toBe(true);
      });
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <CounterBadge>16</CounterBadge>,
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
