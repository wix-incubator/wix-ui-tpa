import * as React from 'react';

import { Pagination, PaginationProps } from '../Pagination';

import extendedStyles from './PaginationExtendedExample.st.css';

interface IPaginationExtendedExampleState {
  currentPage: number;
}

export class PaginationExtendedExample extends React.Component<
  Partial<PaginationProps>,
  IPaginationExtendedExampleState
> {
  state = { currentPage: 1 };

  handleChange = ({ page }) => this.setState({ currentPage: page });

  render() {
    const { currentPage } = this.state;

    return (
      <Pagination
        {...extendedStyles('root', {}, this.props)}
        {...this.props}
        totalPages={10}
        onChange={this.handleChange}
        currentPage={currentPage}
      />
    );
  }
}
