import * as React from 'react';
import { AllPropsRequired } from '../../ts-helper';

export interface WeekDayProps {}
interface DefaultWeekDayProps extends AllPropsRequired<WeekDayProps> {}

export const CALENDAR_WEEK_DAY_DISPLAY_NAME = 'Calendar.WeekDay';

export class WeekDay extends React.Component<WeekDayProps> {
  static displayName = CALENDAR_WEEK_DAY_DISPLAY_NAME;
  static defaultProps: DefaultWeekDayProps = {};

  render = () => {
    return null;
  };
}
