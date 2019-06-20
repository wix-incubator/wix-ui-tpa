import { checkboxDriverFactory as coreCheckboxDriverFactory } from 'wix-ui-core/drivers/vanilla';
import { errorMessageWrapperDriverFactory } from '../../baseComponents/ErrorMessageWrapper/ErrorMessageWrapper.driver';

export const iconToggleDriverFactory = ({ element, eventTrigger }) => {
  const errorMessageWrapperDriver = errorMessageWrapperDriverFactory({
    element,
  });
  return {
    ...coreCheckboxDriverFactory({
      element: errorMessageWrapperDriver.getRenderElement(),
      eventTrigger,
    }),
  };
};
