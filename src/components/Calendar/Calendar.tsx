import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Title, CALENDAR_TITLE_DISPLAY_NAME } from './Title/Title';
import { AllPropsRequired } from './ts-helper';
import { Selector, CALENDAR_SELECTOR_DISPLAY_NAME } from './Selector/Selector';
import { CustomizableComponent } from './CustomizableComponent';
import { CALENDAR_GRID_DISPLAY_NAME, Grid } from './Grid/Grid';
import {
  TodayButton,
  CALENDAR_TODAY_BUTTON_DISPLAY_NAME,
} from './TodayButton/TodayButton';

export enum CalendarLayouts {
  weekly = 'weekly',
  monthly = 'monthly',
}

export interface CalendarProps extends Partial<DefaultCalendarProps> {
  /**
   * Calendar layout.<br /><br />
   * Even though default is CalendarLayouts.monthly, currently only CalendarLayouts.weekly is supported.
   */
  layout?: CalendarLayouts;

  /**
   * Title for the whole calendar. <br /><br />
   * If custom <Calendar.Title> is used without children - this property will replace them. It allows using <Calendar.Title> simply as a placeholder to define custom component's position.<br /><br />
   * If <Calendar.Title> is used and it has children provided - this property will be completely ignored.
   */
  calendarTitle?: string;
}

type DefaultCalendarProps = AllPropsRequired<CalendarProps>;

export const CalendarContext = React.createContext<{ props: CalendarProps }>({
  props: {},
});

/** Component for showing some events of a particular week */
export class Calendar extends CustomizableComponent<CalendarProps> {
  static displayName = 'Calendar';

  static defaultProps: DefaultCalendarProps = {
    layout: CalendarLayouts.monthly,
    calendarTitle: '',
  };

  static Title = Title;
  static Selector = Selector;
  static TodayButton = TodayButton;
  static Grid = Grid;

  defaultElements = {
    [CALENDAR_TITLE_DISPLAY_NAME]: () => (
      <Calendar.Title>{this.props.calendarTitle}</Calendar.Title>
    ),
    [CALENDAR_SELECTOR_DISPLAY_NAME]: () => <Calendar.Selector />,
    [CALENDAR_TODAY_BUTTON_DISPLAY_NAME]: () => <Calendar.TodayButton />,
    [CALENDAR_GRID_DISPLAY_NAME]: () => <Calendar.Grid />,
  };

  render() {
    if (this.props.layout !== CalendarLayouts.weekly) {
      return <div>Monthly Calendar layout is not yet implemented</div>;
    }

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div data-hook={this.props['data-hook']}>
            <CalendarContext.Provider value={{ props: this.props }}>
              {this.getResolvedChildren()}
            </CalendarContext.Provider>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
