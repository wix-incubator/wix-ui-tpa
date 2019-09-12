import * as React from 'react';
import { AllPropsRequired } from '../ts-helper';

export interface SelectorProps {}
interface DefaultSelectorProps extends AllPropsRequired<SelectorProps> {}

export const CALENDAR_SELECTOR_DISPLAY_NAME = 'Calendar.Selector';

export class Selector extends React.PureComponent<SelectorProps> {
  static displayName = CALENDAR_SELECTOR_DISPLAY_NAME;
  static defaultProps: DefaultSelectorProps = {};

  render() {
    return <div>This is going to be selector</div>;
  }
}
