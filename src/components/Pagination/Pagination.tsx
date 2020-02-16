import * as React from 'react';
import {
  Pagination as CorePagination,
  PaginationProps as CorePaginationProps,
} from 'wix-ui-core/pagination';
import { DoubleChevronLeft } from '../Icons/components/DoubleChevronLeft';
import { DoubleChevronRight } from '../Icons/components/DoubleChevronRight';
import { ChevronLeft } from '../Icons/components/ChevronLeft';
import { ChevronRight } from '../Icons/components/ChevronRight';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import styles from './Pagination.st.css';
import { TPAComponentProps } from '../../types';

export interface PaginationProps
  extends CorePaginationProps,
    TPAComponentProps {}

/** Pagination component */
export const Pagination: React.FunctionComponent<PaginationProps> = props => {
  return (
    <TPAComponentsConsumer>
      {({ mobile, rtl }) => {
        return (
          <CorePagination
            {...styles('root', { mobile, rtl }, props)}
            previousLabel={<ChevronLeft />}
            nextLabel={<ChevronRight />}
            firstLabel={<DoubleChevronLeft />}
            lastLabel={<DoubleChevronRight />}
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
