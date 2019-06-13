import { tooltipDriverFactory as coreTooltipDriverFactory } from 'wix-ui-core/drivers/vanilla';

export const tooltipDriverFactory = component => {
  const tooltipDriver = coreTooltipDriverFactory(component);

  return {
    ...tooltipDriver,
  };
};
