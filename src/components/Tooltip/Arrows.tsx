import { Placement } from 'wix-ui-core/popover';
import { TooltipArrowRight as right } from '../Icons/components/TooltipArrowRight';
import { TooltipArrowLeft as left } from '../Icons/components/TooltipArrowLeft';
import { TooltipArrowTop as top } from '../Icons/components/TooltipArrowTop';
import { TooltipArrowBottom as bottom } from '../Icons/components/TooltipArrowBottom';

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
