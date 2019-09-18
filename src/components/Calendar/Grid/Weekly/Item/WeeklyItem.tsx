import * as React from 'react';
import { AllPropsRequired } from '../../../ts-helper';

export interface WeeklyItemProps {}
interface DefaultWeeklyItemProps extends AllPropsRequired<WeeklyItemProps> {}

export const CALENDAR_WEEKLY_ITEM_DISPLAY_NAME = 'Calendar.WeeklyItem';

export class WeeklyItem extends React.PureComponent<WeeklyItemProps> {
  static displayName = CALENDAR_WEEKLY_ITEM_DISPLAY_NAME;
  static defaultProps: DefaultWeeklyItemProps = {};

  render() {
    return <div>This is going to be weekly item</div>;
  }
}
