import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Title, CALENDAR_TITLE_DISPLAY_NAME } from './Title/Title';
import { AllPropsRequired } from './ts-helper';
import { Selector, CALENDAR_SELECTOR_DISPLAY_NAME } from './Selector/Selector';
import { CustomizableComponent } from './CustomizableComponent';
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
   * Calendar layout. <br />
   * Even though default is CalendarLayouts.monthly, currently only CalendarLayouts.weekly is supported.
   */
  layout?: CalendarLayouts;

  /**
   * Title for the whole calendar. <br />
   * This property is completely ignored if custom <Calendar.Title> is used.
   */
  calendarTitle?: string;
}

type DefaultCalendarProps = AllPropsRequired<CalendarProps>;

export const CalendarContext = React.createContext<CalendarProps>({});

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

  defaultElements = {
    [CALENDAR_TITLE_DISPLAY_NAME]: () => (
      <Calendar.Title>{this.props.calendarTitle}</Calendar.Title>
    ),
    [CALENDAR_SELECTOR_DISPLAY_NAME]: () => <Calendar.Selector />,
    [CALENDAR_TODAY_BUTTON_DISPLAY_NAME]: () => <Calendar.TodayButton />,
  };

  render() {
    if (this.props.layout !== CalendarLayouts.weekly) {
      return <div>Monthly Calendar layout is not yet implemented</div>;
    }

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div data-hook={this.props['data-hook']}>
            <CalendarContext.Provider value={this.props}>
              {this.getResolvedChildren()}
            </CalendarContext.Provider>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
