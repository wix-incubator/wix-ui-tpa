import { Placement } from 'wix-ui-core/popover';
import { ArrowRight as right } from '../Icons/components/ArrowRight';
import { ArrowLeft as left } from '../Icons/components/ArrowLeft';
import { ArrowTop as top } from '../Icons/components/ArrowTop';
import { ArrowBottom as bottom } from '../Icons/components/ArrowBottom';

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
