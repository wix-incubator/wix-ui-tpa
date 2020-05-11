import { checkboxDriverFactory as coreCheckboxDriverFactory } from 'wix-ui-core/dist/src/components/checkbox/Checkbox.driver';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import * as style from './IconToggle.st.css';

export const iconToggleDriverFactory = ({ element, eventTrigger }) => {
  const utils = new StylableDOMUtil(style, element);
  return {
    ...coreCheckboxDriverFactory({
      element: element.children[0],
      eventTrigger,
    }),
    getLabel: () => utils.select('.label'),
    getLabelPlacement: () => utils.getStyleState(element, 'labelPlacement'),
    getIcon: () => utils.select('.icon'),
  };
};
