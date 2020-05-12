import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { calendarCellDriverFactory } from './CalendarCell.driver';
import { CalendarCell, Times } from './';
import { calendarCellTestkitFactory } from '../../testkit';
import { calendarCellTestkitFactory as enzymeCalendarCellTestkitFactory } from '../../testkit/enzyme';


const defProps = {
  time: '22',
};

describe('CalendarCell', () => {
  const createDriver = createUniDriverFactory(calendarCellDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<CalendarCell {...defProps} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should show streched state', async () => {
    const driver = createDriver(<CalendarCell isStretchAble={true} {...defProps} />);

    expect(await driver.isStretched()).toBeTruthy();
  });

  it('should show previous month state', async () => {
    const driver = createDriver(<CalendarCell timeType={Times.previousMonth} {...defProps} />);

    expect(await driver.isPreviousMonth()).toBeTruthy();
  });

  it('should show previous days state', async () => {
    const driver = createDriver(<CalendarCell timeType={Times.previousDays} {...defProps} />);

    expect(await driver.isPreviousDays()).toBeTruthy();
  });

  it('should show current day state', async () => {
    const driver = createDriver(<CalendarCell timeType={Times.currentDay} {...defProps} />);

    expect(await driver.isCurrentDay()).toBeTruthy();
  });

  it('should show next month state', async () => {
    const driver = createDriver(<CalendarCell timeType={Times.nextMonth} {...defProps} />);

    expect(await driver.isNextMonth()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<CalendarCell time="11" />, calendarCellTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <CalendarCell time="11" />,
          enzymeCalendarCellTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
