import * as React from 'react';
import { AllPropsRequired } from '../../ts-helper';

export interface WeeklyGridProps {}
interface DefaultWeeklyGridProps extends AllPropsRequired<WeeklyGridProps> {}

export const CALENDAR_WEEKLY_GRID_DISPLAY_NAME = 'Calendar.WeeklyGrid';

export class WeeklyGrid extends React.PureComponent<WeeklyGridProps> {
  static displayName = CALENDAR_WEEKLY_GRID_DISPLAY_NAME;
  static defaultProps: DefaultWeeklyGridProps = {};

  render() {
    return <div>This is going to be weekly grid</div>;
  }
}
