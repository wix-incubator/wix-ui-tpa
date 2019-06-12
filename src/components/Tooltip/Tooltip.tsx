import * as React from 'react';
import { Tooltip as CoreTooltip, TooltipProps } from 'wix-ui-core/tooltip';
import tooltipStyles from './Tooltip.st.css';
import { getArrowByPlacement } from './Arrows';
import { Placement } from 'wix-ui-core/popover';

function customArrow(placement: Placement, arrowProps) {
  const arrowSvg = getArrowByPlacement(placement);

  return (
    <div className={tooltipStyles.tpaArrow} {...arrowProps}>
      {arrowSvg}
    </div>
  );
}

export class Tooltip extends React.Component {
  static displayName = 'Tooltip';

  render() {
    return (
      <CoreTooltip
        {...tooltipStyles('root', {}, this.props)}
        {...this.props}
        timeout={200}
        customArrow={customArrow}
      />
    );
  }
}
