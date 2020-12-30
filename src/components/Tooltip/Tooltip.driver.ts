import { tooltipDriverFactory as coreTooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';

export const tooltipDriverFactory = (component) => {
  const tooltipDriver = coreTooltipDriverFactory(component);

  return {
    ...tooltipDriver,
  };
};
