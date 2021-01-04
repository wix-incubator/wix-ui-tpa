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

import { st, classes } from './Pagination.st.css';
import { TPAComponentProps } from '../../types';

export interface PaginationProps
  extends CorePaginationProps,
    TPAComponentProps {}

/** Pagination component */
export const Pagination: React.FunctionComponent<PaginationProps> = (props) => {
  return (
    <TPAComponentsConsumer>
      {({ mobile, rtl }) => {
        return (
          <CorePagination
            previousLabel={ChevronLeft}
            nextLabel={ChevronRight}
            firstLabel={DoubleChevronLeft}
            lastLabel={DoubleChevronRight}
            rtl={rtl}
            showFirstLastNavButtons={props.totalPages > props.maxPagesToShow}
            paginationMode={mobile ? 'compact' : 'pages'}
            slashLabel={'/'}
            {...props}
            className={st(classes.root, { mobile, rtl }, props.className)}
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
