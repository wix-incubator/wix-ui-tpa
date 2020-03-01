import { Placement } from 'wix-ui-core/popover';
import { TooltipArrowRight as right } from '../Icons/TooltipArrowRight';
import { TooltipArrowLeft as left } from '../Icons/TooltipArrowLeft';
import { TooltipArrowTop as top } from '../Icons/TooltipArrowTop';
import { TooltipArrowBottom as bottom } from '../Icons/TooltipArrowBottom';

export function getArrowByPlacement(placement: Placement) {
  if (placement.indexOf('top') === 0) {
    return top;
  }

  if (placement.indexOf('bottom') === 0) {
    return bottom;
  }

  if (placement.indexOf('left') === 0) {
    return left;
  }

  if (placement.indexOf('right') === 0) {
    return right;
  }
}

export { bottom, top, left, right };
