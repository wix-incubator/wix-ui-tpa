import { Placement } from 'wix-ui-core/popover';
import { ArrowRight as right } from '../../assets/icons/tooltip/ArrowRight.svg';
import { ArrowLeft as left } from '../../assets/icons/tooltip/ArrowLeft.svg';
import { ArrowTop as top } from '../../assets/icons/tooltip/ArrowTop.svg';
import { ArrowBottom as bottom } from '../../assets/icons/tooltip/ArrowBottom.svg';

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
