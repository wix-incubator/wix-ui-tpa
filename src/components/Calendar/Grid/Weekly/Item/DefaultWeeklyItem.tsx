import * as React from 'react';
import { CalendarDay, CalendarEvent } from '../../../Calendar';

export interface DefaultWeeklyItemProps {
  day: CalendarDay;
  event: CalendarEvent;
}

export const CALENDAR_WEEKLY_ITEM_DISPLAY_NAME = 'Calendar.DefaultWeeklyItem';

export class DefaultWeeklyItem extends React.PureComponent<
  DefaultWeeklyItemProps
> {
  static displayName = CALENDAR_WEEKLY_ITEM_DISPLAY_NAME;
  static defaultProps: DefaultWeeklyItemProps = {
    day: null,
    event: null,
  };

  render() {
    const { day, event } = this.props;

    if (!day || !event) {
      return null;
    }

    // TODO: Not finished

    return <div>Item</div>;
  }
}
