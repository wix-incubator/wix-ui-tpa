import {checkboxDriverFactory as coreDriver} from 'wix-ui-core/dist/src/components/Checkbox/Checkbox.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './Checkbox.st.css';

export const checkboxDriverFactory = ({element, eventTrigger}) => {
    const stylableDOMUtil = new StylableDOMUtil(style);

  const getErrorMessageElement = () => element.querySelector(stylableDOMUtil.scopeSelector('.errorMessage'));

  const checkboxDriver = coreDriver({element, eventTrigger});

  return {
    ...checkboxDriver,
    getErrorMessage: () => getErrorMessageElement().innerHTML,
    hasEmptyState: () => stylableDOMUtil.hasStyleState(element, 'empty'),
    hasErrorMessage: () => !!getErrorMessageElement()
  };
};
