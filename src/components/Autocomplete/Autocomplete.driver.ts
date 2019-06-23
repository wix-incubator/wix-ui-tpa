import { autocompleteDriverFactory as coreAutocompleteDriverFactory } from 'wix-ui-core/drivers/vanilla';
import { errorMessageWrapperDriverFactory } from '../ErrorMessageWrapper/ErrorMessageWrapper.driver';

export const autocompleteDriverFactory = ({ element, eventTrigger }) => {
  const errorMessageWrapperDriver = errorMessageWrapperDriverFactory({
    element,
  });
  return {
    ...coreAutocompleteDriverFactory({
      element: errorMessageWrapperDriver.getRenderElement(),
      eventTrigger,
    }),
  };
};
