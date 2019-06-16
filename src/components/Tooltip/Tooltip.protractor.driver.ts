import { tooltipDriverFactory as coreDriver, TooltipDriver as coreTooltipDriver } from 'wix-ui-core/drivers/protractor';

export interface TooltipProtractorDriver extends coreTooltipDriver {}

export const tooltipDriverFactory = component => {
    const tooltipDriver = coreDriver(component);

    return {
        ...tooltipDriver,
    };
};
