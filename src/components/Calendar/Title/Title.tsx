import * as React from 'react';
import { Text as TextTPA, TYPOGRAPHY } from '../../Text';
import { AllPropsRequired } from '../ts-helper';
import { CalendarContextStructure } from '../Calendar';
import * as classNames from 'classnames';
import { CalendarComponent } from '../CalendarComponent';
import styles from './Title.st.css';

// Working-around missing props in typings
const Text = TextTPA as any;

export interface TitleProps {
  className?: string;
}

interface DefaultTitleProps extends AllPropsRequired<TitleProps> {}

export const CALENDAR_TITLE_DISPLAY_NAME = 'Calendar.Title';

export class Title extends CalendarComponent<TitleProps> {
  static displayName = CALENDAR_TITLE_DISPLAY_NAME;

  static defaultProps: DefaultTitleProps = {
    className: '',
  };

  renderWithContext = (context: CalendarContextStructure) => {
    const { children, className } = this.props;
    const content = children || context.props.calendarTitle;

    return content ? (
      <Text
        className={classNames(context.styles.titleText, {
          [className]: className,
        })}
        typography={TYPOGRAPHY.largeTitle}
        data-hook="calendar-title"
      >
        {content}
      </Text>
    ) : null;
  };
}
