import {StylableDOMUtil} from '@stylable/dom-test-kit';
import style from './Text.st.css';

export const textDriverFactory = ({element}) => {
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    exists: () => !!element,
    getTagName: () => element.tagName.toLowerCase(),
    getContent: () => element.firstChild.innerHTML,
    getTypography: () => stylableDOMUtil.getStyleState(element, 'typography'),
  };
};
