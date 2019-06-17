import * as React from 'react';
import {
  Tooltip as CoreTooltip,
  TooltipProps as CoreTooltipProps,
} from 'wix-ui-core/tooltip';
import tooltipStyles from './Tooltip.st.css';
import { getArrowByPlacement } from './Arrows';
import { Placement } from 'wix-ui-core/popover';

function customArrow(placement: Placement, arrowProps) {
  const ArrowSvg = getArrowByPlacement(placement);

  return (
    <div className={tooltipStyles.tpaArrow} {...arrowProps}>
      <ArrowSvg />
    </div>
  );
}

export interface TooltipProps extends CoreTooltipProps {}

export class Tooltip extends React.Component<TooltipProps> {
  static displayName = 'Tooltip';

  render() {
    return (
      <CoreTooltip
        {...tooltipStyles('root', {}, this.props)}
        {...this.props}
        timeout={{ enter: 120, exit: 80 }}
        customArrow={customArrow}
      />
    );
  }
}
