import * as React from 'react';

import { Pagination, PaginationProps } from '../Pagination';

import { classes } from './PaginationWiringExample.st.css';

interface IPaginationWiringExampleState {
  currentPage: number;
}

export class PaginationWiringExample extends React.Component<
  Partial<PaginationProps>,
  IPaginationWiringExampleState
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
