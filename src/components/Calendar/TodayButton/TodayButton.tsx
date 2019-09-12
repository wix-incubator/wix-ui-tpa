import * as React from 'react';
import { AllPropsRequired } from '../ts-helper';

export interface TodayButtonProps {}
interface DefaultTodayButtonProps extends AllPropsRequired<TodayButtonProps> {}

export const CALENDAR_TODAY_BUTTON_DISPLAY_NAME = 'Calendar.TodayButton';

export class TodayButton extends React.PureComponent<TodayButtonProps> {
  static displayName = CALENDAR_TODAY_BUTTON_DISPLAY_NAME;
  static defaultProps: DefaultTodayButtonProps = {};

  render() {
    return <div>This is going to be today button</div>;
  }
}
