import { Placement } from 'wix-ui-core/popover';

export function getArrowPlacement(placement: Placement): Placement {
  if (placement.indexOf('top') === 0) {
    return 'top';
  }

  if (placement.indexOf('bottom') === 0) {
    return 'bottom';
  }

  if (placement.indexOf('left') === 0) {
    return 'left';
  }

  if (placement.indexOf('right') === 0) {
    return 'right';
  }
}
