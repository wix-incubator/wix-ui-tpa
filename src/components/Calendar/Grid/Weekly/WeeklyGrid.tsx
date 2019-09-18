import * as React from 'react';
import {
  CalendarDay,
  CalendarEvent,
  CalendarWeekDay,
  CalendarContextStructure,
} from '../../Calendar';
import { CalendarComponent } from '../../CalendarComponent';
import { CalendarError } from '../../CalendarError';
import { DefaultWeeklyItem } from './Item/DefaultWeeklyItem';

export interface WeeklyGridProps {
  renderItem(day: CalendarDay, event: CalendarEvent): React.ReactNode;
  renderWeekDay(weekDay: CalendarWeekDay): React.ReactNode;
  popup: React.ReactNode;
  hideWeekDayTitles: boolean;
}

export const CALENDAR_WEEKLY_GRID_DISPLAY_NAME = 'Calendar.WeeklyGrid';

export class WeeklyGrid extends CalendarComponent<WeeklyGridProps> {
  static displayName = CALENDAR_WEEKLY_GRID_DISPLAY_NAME;

  static defaultProps: WeeklyGridProps = {
    renderItem: (day, event) => <DefaultWeeklyItem day={day} event={event} />,
    renderWeekDay: weekDay => weekDay.title,
    popup: null,
    hideWeekDayTitles: false,
  };

  renderWithContext = (context: CalendarContextStructure) => {
    const { hideWeekDayTitles, renderWeekDay, renderItem } = this.props;

    const { days, weekDays } = context.props.config;

    if (days.length !== weekDays.length) {
      console.error(
        new CalendarError(
          'Amount of days and weekDays in configuration should match for weekly calendar layout.',
        ),
      );
      return null;
    }

    return (
      <div>
        {days.map((day, dayIndex) => (
          <div>
            <div>
              {hideWeekDayTitles ? null : renderWeekDay(weekDays[dayIndex])}
            </div>
            <div>{day.events.map(event => renderItem(day, event))}</div>
          </div>
        ))}
      </div>
    );
  };
}
