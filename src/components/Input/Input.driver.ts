import {inputDriverFactory as coreDriver} from 'wix-ui-core/dist/src/components/Input/Input.driver';
import {StylableDOMUtil} from '@stylable/dom-test-kit';
import style from './Input.st.css';

export const inputDriverFactory = ({element, eventTrigger}) => {
    const stylableDOMUtil = new StylableDOMUtil(style);

  const getErrorMessageElement = () => element.querySelector(stylableDOMUtil.scopeSelector('.errorMessage'));

  const inputDriver = coreDriver({element, eventTrigger});

  return {
    ...inputDriver,
    getErrorMessage: () => getErrorMessageElement().innerHTML,
    hasEmptyState: () => stylableDOMUtil.hasStyleState(element, 'empty'),
    hasErrorMessage: () => !!getErrorMessageElement()
  };
};
