import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { calendarCellDriverFactory } from './CalendarCell.driver';
import { CalendarCell } from './';
import { calendarCellTestkitFactory } from '../../testkit';
import { calendarCellTestkitFactory as enzymeCalendarCellTestkitFactory } from '../../testkit/enzyme';

const defProps = {
  title: '22',
};

describe('CalendarCell', () => {
  const createDriver = createUniDriverFactory(calendarCellDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<CalendarCell {...defProps} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should show streched state', async () => {
    const driver = createDriver(<CalendarCell stretchable {...defProps} />);

    expect(await driver.isStretched()).toBeTruthy();
  });

  it('should show bold background state', async () => {
    const driver = createDriver(<CalendarCell boldBackground {...defProps} />);

    expect(await driver.isBoldBackground()).toBeTruthy();
  });

  it('should show bold title state', async () => {
    const driver = createDriver(<CalendarCell boldTitle {...defProps} />);

    expect(await driver.isBoldTitle()).toBeTruthy();
  });

  it('should show current day state', async () => {
    const driver = createDriver(<CalendarCell current {...defProps} />);

    expect(await driver.isCurrentDay()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <CalendarCell title="11" />,
          calendarCellTestkitFactory,
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
          <CalendarCell title="11" />,
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
