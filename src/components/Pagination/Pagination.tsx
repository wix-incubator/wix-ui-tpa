import * as React from 'react';

import {
  Pagination as CorePagination,
  PaginationProps as CorePaginationProps,
} from 'wix-ui-core/pagination';

import { DoubleChevronLeft } from '../../assets/icons/DoubleChevronLeft';
import { DoubleChevronRight } from '../../assets/icons/DoubleChevronRight';
import { ChevronLeft } from '../../assets/icons/ChevronLeft';
import { ChevronRight } from '../../assets/icons/ChevronRight';

import { TPAComponentsConsumer } from '../TPAComponentsConfig';

import styles from './Pagination.st.css';

export interface PaginationProps extends CorePaginationProps {
  /** Justify content */
  alignment?: 'left' | 'center' | 'right';
  'data-hook'?: string;
}

/** Pagination component */
export const Pagination: React.FunctionComponent<PaginationProps> = ({
  alignment,
  ...props
}) => {
  return (
    <TPAComponentsConsumer>
      {({ mobile: mobileView, rtl }) => {
        return (
          <CorePagination
            {...styles('root', { alignment, mobileView, rtl }, props)}
            previousLabel={ChevronLeft}
            nextLabel={ChevronRight}
            firstLabel={DoubleChevronLeft}
            lastLabel={DoubleChevronRight}
            showFirstLastNavButtons={props.totalPages > 5}
            rtl={rtl}
            paginationMode={mobileView ? 'input' : 'pages'}
            {...props}
          />
        );
      }}
    </TPAComponentsConsumer>
  );
};

Pagination.displayName = 'Pagination';

Pagination.defaultProps = {
  maxPagesToShow: 5,
  totalPages: 10,
  alignment: 'center',
  onChange: () =>
    console.warn('wix-ui-tpa/Pagination: onChange is not implemented'),
};
