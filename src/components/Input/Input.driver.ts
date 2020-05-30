import { inputDriverFactory as coreDriver } from 'wix-ui-core/dist/src/components/input/Input.driver';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import * as style from './Input.st.css';

export const inputDriverFactory = ({ element, eventTrigger }) => {
  const stylableDOMUtil = new StylableDOMUtil(style);

  const getErrorMessageElement = () => {
    return element.querySelector(
      stylableDOMUtil.scopeSelector('.errorMessage'),
    );
  };

  const inputDriver = coreDriver({ element, eventTrigger });

  return {
    ...inputDriver,
    getErrorMessage: () => getErrorMessageElement().innerHTML,
    hasEmptyState: () => stylableDOMUtil.hasStyleState(element, 'empty'),
    hasErrorMessage: () => !!getErrorMessageElement(),
  };
};
