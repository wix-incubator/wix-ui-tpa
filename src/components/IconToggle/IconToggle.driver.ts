import { checkboxDriverFactory as coreCheckboxDriverFactory } from 'wix-ui-core/drivers/vanilla';

export const iconToggleDriverFactory = ({ element, eventTrigger }) => {
  return {
    ...coreCheckboxDriverFactory({
      element: element.children[0],
      eventTrigger,
    }),
  };
};
