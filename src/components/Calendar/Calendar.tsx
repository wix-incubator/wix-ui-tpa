// import { Text } from '../Text';
// import { Button } from '../Button';
// import styles from './Calendar.st.css';

import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Title, CALENDAR_TITLE_DISPLAY_NAME } from './Title/Title';
import { AllPropsRequired } from './ts-helper';

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

// TODO: remove this if unused
export interface CalendarState {
  // TODO: Not finished
}

/** Component for showing some events of a particular week */
export class Calendar extends React.Component<CalendarProps, CalendarState> {
  static displayName = 'Calendar';

  static defaultProps: DefaultCalendarProps = {
    layout: CalendarLayouts.monthly,
    calendarTitle: 'aaa',
  };

  static Title = Title;

  // TODO: remove state if unused
  state = {};

  hasNode = (name: string) => {
    let children: any = this.props.children || [];
    children = children.length ? children : [children];

    return Boolean(
      children.find(child => child.type && child.type.displayName === name),
    );
  };

  hasTitle = () => this.hasNode(CALENDAR_TITLE_DISPLAY_NAME);

  render() {
    if (this.props.layout !== CalendarLayouts.weekly) {
      return <div>Monthly Calendar layout is not yet implemented</div>;
    }

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div data-hook={this.props['data-hook']}>
            {this.hasTitle() ? null : (
              <Calendar.Title>{this.props.calendarTitle}</Calendar.Title>
            )}
            {this.props.children}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
