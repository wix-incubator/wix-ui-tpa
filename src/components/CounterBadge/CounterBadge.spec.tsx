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

  it('should render the right value in the getContent()', async () => {
    const driver = createDriver(<CounterBadge value={6} />);

    expect(await driver.getContent()).toBe('6');
  });

  it('should render +99 badge as default if value is above 99', async () => {
    const driver = createDriver(<CounterBadge value={134} />);

    expect(await driver.getContent()).toBe('+99');
  });

  it('should render +[maximum] if value is above maximum', async () => {
    const maximum = 9;
    const driver = createDriver(
      <CounterBadge maximum={maximum} value={maximum + 1} />,
    );

    expect(await driver.getContent()).toBe(`+${maximum}`);
  });

  [COUNTER_BADGE_PRIORITY.primary, COUNTER_BADGE_PRIORITY.secondary].forEach(
    (priority) => {
      it(`should render counter badge for priority = ${priority}`, async () => {
        const driver = createDriver(
          <CounterBadge priority={priority} value={8} />,
        );

        expect(await driver.exists()).toBe(true);
      });
    },
  );

  it('enzyme testkit - should exist', async () => {
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
