import { StylableDOMUtil } from '@stylable/dom-test-kit';
import * as style from './Text.st.css';

export const textDriverFactory = ({ element }) => {
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    exists: () => !!element,
    getTagName: () => element.tagName.toLowerCase(),
    getContent: () => element.textContent,
    getTypography: () => stylableDOMUtil.getStyleState(element, 'typography'),
    getPriority: () => stylableDOMUtil.getStyleState(element, 'priority'),
    isMobile: () => stylableDOMUtil.getStyleState(element, 'mobile') === true,
  };
};
