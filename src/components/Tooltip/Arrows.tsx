import { Placement } from 'wix-ui-core/popover';
import { ReactComponent as right } from './ArrowRight.svg';
import { ReactComponent as left } from './ArrowLeft.svg';
import { ReactComponent as top } from './ArrowTop.svg';
import { ReactComponent as bottom } from './ArrowBottom.svg';

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
