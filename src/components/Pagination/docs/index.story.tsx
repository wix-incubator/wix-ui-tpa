import * as React from 'react';
import { Pagination } from '../';

export default {
  category: 'Components',
  storyName: 'Pagination',
  component: Pagination,
  componentPath: '../Pagination.tsx',

  componentProps: setState => ({
    'data-hook': 'storybook-Pagination',
    totalPages: 10,
    maxPagesToShow: 5,
    currentPage: 1,
    onChange: ({ page }) => setState({ currentPage: page }),
  }),

  exampleProps: {
    paginationMode: ['pages', 'input'],
    onChange: ({ page }) => `Selected page: ${page}`,
  },
};
