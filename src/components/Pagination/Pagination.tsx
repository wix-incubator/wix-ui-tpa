import * as React from 'react';
import {
  Pagination as CorePagination,
  PaginationProps as CorePaginationProps,
} from 'wix-ui-core/pagination';
import { Arrow_DoubleArrow_Left_Center as DoubleChevronLeft } from '../Icons/components/Arrow_DoubleArrow_Left_Center';
import { Arrow_DoubleArrow_Right_Center as DoubleChevronRight } from '../Icons/components/Arrow_DoubleArrow_Right_Center';
import { Arrow_Left_Center as ChevronLeft } from '../Icons/components/Arrow_Left_Center';
import { Arrow_Right_Center as ChevronRight } from '../Icons/components/Arrow_Right_Center';
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
