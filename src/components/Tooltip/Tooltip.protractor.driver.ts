import {
  tooltipDriverFactory as coreDriver,
  TooltipDriver as coreTooltipDriver,
} from 'wix-ui-core/dist/src/components/tooltip/Tooltip.protractor.driver';

export interface TooltipProtractorDriver extends coreTooltipDriver {}

export const tooltipDriverFactory = (component) => {
  const tooltipDriver = coreDriver(component);

  return {
    ...tooltipDriver,
  };
};
