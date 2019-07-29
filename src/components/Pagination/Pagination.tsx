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

export interface PaginationProps extends CorePaginationProps {}

/** Pagination component */
export const Pagination: React.FunctionComponent<PaginationProps> = props => {
  return (
    <TPAComponentsConsumer>
      {({ mobile, rtl }) => {
        return (
          <CorePagination
            {...styles('root', { mobile, rtl }, props)}
            previousLabel={ChevronLeft}
            nextLabel={ChevronRight}
            firstLabel={DoubleChevronLeft}
            lastLabel={DoubleChevronRight}
            rtl={rtl}
            showFirstLastNavButtons={props.totalPages > props.maxPagesToShow}
            paginationMode={mobile ? 'compact' : 'pages'}
            slashLabel={'/'}
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
};
