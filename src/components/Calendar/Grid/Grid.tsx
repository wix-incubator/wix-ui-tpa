import * as React from 'react';
import { AllPropsRequired } from '../ts-helper';
import { CalendarContextStructure, CalendarLayouts } from '../Calendar';
import { WeeklyGrid } from './Weekly/WeeklyGrid';
import { CustomizableComponent } from '../CustomizableComponent';
import { CALENDAR_WEEK_DAY_DISPLAY_NAME, WeekDay } from './WeekDay/WeekDay';
import { CALENDAR_ITEM_DISPLAY_NAME } from './Item/Item';

export interface GridProps {}
interface DefaultGridProps extends AllPropsRequired<GridProps> {}

export const CALENDAR_GRID_DISPLAY_NAME = 'Calendar.Grid';

export class Grid extends CustomizableComponent<GridProps> {
  static displayName = CALENDAR_GRID_DISPLAY_NAME;
  static defaultProps: DefaultGridProps = {};

  /*
  getSupportedComponents = () => {
    const supported = [];

    // TODO: Not finished
  };
  */

  renderWeekDay = () => {
    return <WeekDay>{weekDay => weekDay.title}</WeekDay>;
  };

  renderItem = () => {
    return null;
  };

  defaultElements = {
    [CALENDAR_WEEK_DAY_DISPLAY_NAME]: this.renderWeekDay,
    [CALENDAR_ITEM_DISPLAY_NAME]: this.renderItem,
  };

  renderWithContext = (context: CalendarContextStructure) => {
    // Collect Calendar.WeekDay, Calendar.Item and Calendar.Popup

    const { layout } = context.props;

    if (layout === CalendarLayouts.weekly) {
      return <WeeklyGrid />;
    }

    return null;
  };
}
