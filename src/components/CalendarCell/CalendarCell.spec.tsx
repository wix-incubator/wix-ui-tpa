import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { calendarCellDriverFactory } from './CalendarCell.driver';
import { CalendarCell, Alignment, Times } from './';
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

    expect(await driver.stretcheable()).toBeTruthy();
  });

  it('should show past date state', async () => {
    const driver = createDriver(
      <CalendarCell timeType={Times.pastDate} {...defProps} />,
    );

    expect(await driver.hasTimeType(Times.pastDate)).toBeTruthy();
  });

  it('should show today state', async () => {
    const driver = createDriver(
      <CalendarCell timeType={Times.today} {...defProps} />,
    );

    expect(await driver.hasTimeType(Times.today)).toBeTruthy();
  });

  it('should show future date state', async () => {
    const driver = createDriver(
      <CalendarCell timeType={Times.futureDate} {...defProps} />,
    );

    expect(await driver.hasTimeType(Times.futureDate)).toBeTruthy();
  });

  it('should show current state', async () => {
    const driver = createDriver(<CalendarCell current {...defProps} />);

    expect(await driver.hasCurrent()).toBeTruthy();
  });

  it('should show right alignment state', async () => {
    const mockAlignment = Alignment.right;
    const driver = createDriver(
      <CalendarCell alignment={mockAlignment} {...defProps} />,
    );

    expect(await driver.hasRightAlignment(mockAlignment)).toBeTruthy();
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
