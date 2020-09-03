import { TooltipProps } from 'src/components/Tooltip';
import { colorPickerItemTooltipDataHook } from '../dataHooks';

export const TOOLTIP_COMMON_PROPS: Partial<TooltipProps> = {
  'data-hook': colorPickerItemTooltipDataHook,
  moveBy: { x: 0, y: 2 },
  appendTo: 'window',
  placement: 'top',
};
