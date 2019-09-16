import * as React from 'react';
import { Text as TextTPA, TYPOGRAPHY } from '../../Text';
import { AllPropsRequired } from '../ts-helper';
import { CalendarContext, CalendarContextStructure } from '../Calendar';
import * as classNames from 'classnames';
import { CalendarComponent } from '../CalendarComponent';

// Working-around missing props in typings
const Text = TextTPA as any;

export interface TitleProps {
  style?: React.CSSProperties;
  className?: string;
}

interface DefaultTitleProps extends AllPropsRequired<TitleProps> {}

export const CALENDAR_TITLE_DISPLAY_NAME = 'Calendar.Title';

export class Title extends CalendarComponent<TitleProps> {
  static displayName = CALENDAR_TITLE_DISPLAY_NAME;

  static defaultProps: DefaultTitleProps = {
    style: {},
    className: '',
  };

  renderWithContext = (context: CalendarContextStructure) => {
    const { children, className, style } = this.props;
    const content = children || context.props.calendarTitle;

    return content ? (
      <Text
        style={style}
        className={classNames(context.classNames.titleText, {
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
