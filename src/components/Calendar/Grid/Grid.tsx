import * as React from 'react';
import { AllPropsRequired } from '../ts-helper';

export interface GridProps {}
interface DefaultGridProps extends AllPropsRequired<GridProps> {}

export const CALENDAR_GRID_DISPLAY_NAME = 'Calendar.Grid';

export class Grid extends React.PureComponent<GridProps> {
  static displayName = CALENDAR_GRID_DISPLAY_NAME;
  static defaultProps: DefaultGridProps = {};

  render() {
    return <div>This is going to be grid</div>;
  }
}
