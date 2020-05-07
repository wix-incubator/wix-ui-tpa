import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { calendarCellDriverFactory } from './CalendarCell.driver';
import { CalendarCell } from './';
import { calendarCellTestkitFactory } from '../../testkit';
import { calendarCellTestkitFactory as enzymeCalendarCellTestkitFactory } from '../../testkit/enzyme';

describe('CalendarCell', () => {
  const createDriver = createUniDriverFactory(calendarCellDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<CalendarCell buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<CalendarCell />, calendarCellTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <CalendarCell />,
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
