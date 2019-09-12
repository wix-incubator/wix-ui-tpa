import * as React from 'react';
import { Text as TextTPA, TYPOGRAPHY } from '../../Text';
import { AllPropsRequired } from '../ts-helper';
import { CalendarContext, CalendarContextStructure } from '../Calendar';
import styles from '../Calendar.st.css';

// Working-around missing props in typings
const Text = TextTPA as any;

export interface TitleProps {}
interface DefaultTitleProps extends AllPropsRequired<TitleProps> {}

export const CALENDAR_TITLE_DISPLAY_NAME = 'Calendar.Title';

export class Title extends React.PureComponent<TitleProps> {
  static displayName = CALENDAR_TITLE_DISPLAY_NAME;
  static defaultProps: DefaultTitleProps = {};

  renderComponent = (context: CalendarContextStructure) => {
    const content = this.props.children || context.props.calendarTitle;

    return content ? (
      <Text
        className={context.classNames.titleText}
        typography={TYPOGRAPHY.largeTitle}
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
