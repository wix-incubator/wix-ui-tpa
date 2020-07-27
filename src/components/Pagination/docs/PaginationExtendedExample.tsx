import * as React from 'react';

import { Pagination, PaginationProps } from '../Pagination';

import { classes } from './PaginationExtendedExample.st.css';

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
        className={classes.root}
        {...this.props}
        totalPages={10}
        onChange={this.handleChange}
        currentPage={currentPage}
      />
    );
  }
}
