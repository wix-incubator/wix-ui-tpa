import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { weeklyCalendarDriverFactory } from './WeeklyCalendar.driver';
import { WeeklyCalendar } from './';
import { weeklyCalendarTestkitFactory } from '../../testkit';
import { weeklyCalendarTestkitFactory as enzymeWeeklyCalendarTestkitFactory } from '../../testkit/enzyme';

describe('WeeklyCalendar', () => {
  const createDriver = createUniDriverFactory(weeklyCalendarDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<WeeklyCalendar buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<WeeklyCalendar />),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <WeeklyCalendar />,
          weeklyCalendarTestkitFactory,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <WeeklyCalendar />,
          enzymeWeeklyCalendarTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
