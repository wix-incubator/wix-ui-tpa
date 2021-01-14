import * as React from 'react';
import {
  Tooltip as CoreTooltip,
  TooltipProps as CoreTooltipProps,
} from 'wix-ui-core/tooltip';
import { getArrowByPlacement } from './Arrows';
import { Placement } from 'wix-ui-core/popover';
import { TooltipSkin } from './TooltipEnums';
import { TPAComponentProps } from '../../types';
import { st, classes } from './Tooltip.st.css';

function customArrow(placement: Placement, arrowProps) {
  const ArrowSvg = getArrowByPlacement(placement);

  return (
    <div className={classes.tpaArrow} {...arrowProps}>
      <ArrowSvg />
    </div>
  );
}

export interface TooltipProps extends CoreTooltipProps, TPAComponentProps {
  /** Changes appearance of tooltip according to skin. Possible values: 'standard', 'error'*/
  skin?: TooltipSkin;
}

export interface TooltipDefaultProps
  extends Required<Pick<TooltipProps, 'skin' | 'maxWidth'>> {}

export class Tooltip extends React.Component<TooltipProps> {
  static displayName = 'Tooltip';
  static defaultProps: TooltipDefaultProps = {
    skin: TooltipSkin.Standard,
    maxWidth: 240,
  };

  render() {
    const { className, ...rest } = this.props;
    return (
      <CoreTooltip
        className={st(classes.root, { skin: this.props.skin }, className)}
        timeout={{ enter: 120, exit: 80 }}
        customArrow={customArrow}
        {...rest}
      />
    );
  }
}
