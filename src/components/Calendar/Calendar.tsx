// import { Text } from '../Text';
// import { Button } from '../Button';
// import styles from './Calendar.st.css';

import * as React from 'react';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Title, CALENDAR_TITLE_DISPLAY_NAME } from './Title/Title';

interface DefaultCalendarProps {
  calendarTitle: string;
}

export interface CalendarProps extends Partial<DefaultCalendarProps> {}

// TODO: remove this if unused
export interface CalendarState {
  // TODO: Not finished
}

/** Component for showing some events of a particular week */
export class Calendar extends React.Component<CalendarProps, CalendarState> {
  static displayName = 'Calendar';

  static defaultProps: DefaultCalendarProps = {
    calendarTitle: '',
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
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div>
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
