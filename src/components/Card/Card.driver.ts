import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Card.st.css';

export const cardDriverFactory = ({ element }) => {
  const stylableDOMUtil = new StylableDOMUtil(style);

  const getImageContainerElement = () =>
    element.querySelector(stylableDOMUtil.scopeSelector('.mediaContainer'));
  const getInfoContainerElement = () =>
    element.querySelector(stylableDOMUtil.scopeSelector('.infoContainer'));

  return {
    exists: () => !!element,
    getMediaContent: () => getImageContainerElement().innerHTML,
    getInfoContent: () => getInfoContainerElement().innerHTML,
    getRatio: () => stylableDOMUtil.getStyleState(element, 'ratio'),
    hasFlippedRatioState: () =>
      stylableDOMUtil.hasStyleState(element, 'flippedRatio'),
    hasInvertImagePositionState: () =>
      stylableDOMUtil.hasStyleState(element, 'invertInfoPosition'),
  };
};
