import * as React from 'react';
import {
  Tooltip as CoreTooltip,
  TooltipProps as CoreTooltipProps,
} from 'wix-ui-core/tooltip';
import tooltipStyles from './Tooltip.st.css';
import { getArrowByPlacement } from './Arrows';
import { Placement } from 'wix-ui-core/popover';
import { TooltipSkin } from './TooltipEnums';

function customArrow(placement: Placement, arrowProps) {
  const ArrowSvg = getArrowByPlacement(placement);

  return (
    <div className={tooltipStyles.tpaArrow} {...arrowProps}>
      <ArrowSvg />
    </div>
  );
}

export interface TooltipProps extends CoreTooltipProps {
  /** Changes appearance of tooltip according to skin. Possible values: 'standard', 'error'*/
  skin?: TooltipSkin;
}

export interface TooltipDefaultProps
  extends Required<Pick<TooltipProps, 'skin'>> {}

export class Tooltip extends React.Component<TooltipProps> {
  static displayName = 'Tooltip';
  static defaultProps: TooltipDefaultProps = {
    skin: TooltipSkin.Standard,
  };

  render() {
    return (
      <CoreTooltip
        {...tooltipStyles('root', { skin: this.props.skin }, this.props)}
        {...this.props}
        timeout={{ enter: 120, exit: 80 }}
        customArrow={customArrow}
      />
    );
  }
}
