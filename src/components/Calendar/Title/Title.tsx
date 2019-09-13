import * as React from 'react';
import { Text as TextTPA, TYPOGRAPHY } from '../../Text';
import { AllPropsRequired } from '../ts-helper';
import { CalendarContext, CalendarContextStructure } from '../Calendar';

// Working-around missing props in typings
const Text = TextTPA as any;

export interface TitleProps {
  className?: string;
}

interface DefaultTitleProps extends AllPropsRequired<TitleProps> {}

export const CALENDAR_TITLE_DISPLAY_NAME = 'Calendar.Title';

export class Title extends React.PureComponent<TitleProps> {
  static displayName = CALENDAR_TITLE_DISPLAY_NAME;

  static defaultProps: DefaultTitleProps = {
    className: '',
  };

  renderComponent = (context: CalendarContextStructure) => {
    const { children, className } = this.props;

    const content = children || context.props.calendarTitle;
    const classNames = [context.classNames.titleText];

    if (className) {
      classNames.push(className);
    }

    // TODO: set 36px Heading5 color-5

    return content ? (
      <Text
        className={classNames.join(' ')}
        typography={TYPOGRAPHY.largeTitle}
        data-hook="calendar-title"
      >
        {content}
      </Text>
    ) : null;
  };

  render() {
    return (
      <CalendarContext.Consumer>
        {context => this.renderComponent(context)}
      </CalendarContext.Consumer>
    );
  }
}
