import { StylableDOMUtil } from '@stylable/dom-test-kit';
import { Simulate } from 'react-dom/test-utils';

import { paginationDriverFactory as corePaginationDriverFactory } from 'wix-ui-core/dist/src/components/pagination/Pagination.driver';

import * as style from './Pagination.st.css';

export const paginationDriverFactory = ({ element }) => {
  const stylableDOMUtil = new StylableDOMUtil(style);
  const coreDriver = corePaginationDriverFactory({
    element,
    eventTrigger: Simulate,
  });

  return {
    ...coreDriver,
    isMobile: async () => stylableDOMUtil.hasStyleState(element, 'mobile'),
  };
};
