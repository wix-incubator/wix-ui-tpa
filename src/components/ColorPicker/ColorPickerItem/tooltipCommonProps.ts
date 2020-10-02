import { TooltipProps } from 'src/components/Tooltip';

export const TOOLTIP_COMMON_PROPS: Partial<TooltipProps> = {
  moveBy: { x: 0, y: 2 },
  appendTo: 'scrollParent',
  placement: 'top',
};
