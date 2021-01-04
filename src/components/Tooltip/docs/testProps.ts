import { TooltipSkin } from '../TooltipEnums';

export const testPropsList: { [key: string]: any } = [
  ...Object.values(TooltipSkin).map((skin) => {
    return {
      skin,
      'data-hook': `tooltip-skin-${skin}-data-hook`,
    };
  }),
];
