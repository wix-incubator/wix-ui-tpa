import * as React from 'react';
import { Text } from '../../Text';
import { AllPropsRequired } from '../ts-helper';
import { CalendarContext, CalendarProps } from '../Calendar';

export interface TitleProps {}
interface DefaultTitleProps extends AllPropsRequired<TitleProps> {}

export const CALENDAR_TITLE_DISPLAY_NAME = 'Calendar.Title';

export class Title extends React.PureComponent<TitleProps> {
  static displayName = CALENDAR_TITLE_DISPLAY_NAME;
  static defaultProps: DefaultTitleProps = {};

  renderComponent = (calendarProps: CalendarProps) => {
    const text = this.props.children || calendarProps.calendarTitle;
    return text ? <Text>{text}</Text> : null;
  };

  render() {
    return (
      <CalendarContext.Consumer>
        {calendarProps => this.renderComponent(calendarProps)}
      </CalendarContext.Consumer>
    );
  }
}
