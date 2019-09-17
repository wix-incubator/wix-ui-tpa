import * as React from 'react';
import { AllPropsRequired } from '../ts-helper';
import { CalendarComponent } from '../CalendarComponent';
import { CalendarContextStructure } from '../Calendar';
import styles from './TodayButton.st.css';
import { Button, PRIORITY, SIZE } from '../../Button';
import * as classNames from 'classnames';

export interface TodayButtonProps {
  onClick(): {};
  priority: PRIORITY;
  size: SIZE;
  style?: React.CSSProperties;
  className?: string;
}

interface DefaultTodayButtonProps extends AllPropsRequired<TodayButtonProps> {}

export const CALENDAR_TODAY_BUTTON_DISPLAY_NAME = 'Calendar.TodayButton';

export class TodayButton extends CalendarComponent<TodayButtonProps> {
  static displayName = CALENDAR_TODAY_BUTTON_DISPLAY_NAME;
  static defaultProps: DefaultTodayButtonProps = {
    onClick: null,
    priority: null,
    size: null,
    style: {},
    className: '',
  };

  renderWithContext = (context: CalendarContextStructure) => {
    const {
      onClick: onClickProp,
      priority: priorityProp,
      size: sizeProp,
      style,
      className,
    } = this.props;

    const {
      onClickToday: onClickGlobal,
      todayButtonText,
      todayButtonPriority,
      todayButtonSize,
      hideTodayButton,
    } = context.props;

    if (hideTodayButton) {
      return null;
    }

    const onClick = onClickProp || onClickGlobal;
    const priority = priorityProp || todayButtonPriority;
    const size = sizeProp || todayButtonSize;
    const children = this.props.children || todayButtonText;

    return (
      <Button
        priority={priority}
        size={size}
        onClick={onClick}
        style={style}
        className={classNames(styles.button, className)}
      >
        {children}
      </Button>
    );
  };
}
