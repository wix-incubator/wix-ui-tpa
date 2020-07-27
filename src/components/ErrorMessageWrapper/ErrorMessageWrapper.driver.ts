import { StylableDOMUtil } from '@stylable/dom-test-kit';
import * as style from './ErrorMessageWrapper.st.css';

const stylableDOMUtil = new StylableDOMUtil(style);
export const errorMessageWrapperDriverFactory = ({ element }) => {
  const getErrorMessageElement = () =>
    element.querySelector(stylableDOMUtil.scopeSelector('.errorMessage'));
  return {
    exists: () => !!element,
    getErrorMessage: () => getErrorMessageElement().innerHTML,
    hasEmptyState: () => stylableDOMUtil.hasStyleState(element, 'empty'),
    hasErrorMessage: () => !!getErrorMessageElement(),
    getRenderElement: () => element.children[0],
  };
};
