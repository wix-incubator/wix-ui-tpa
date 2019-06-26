import * as React from 'react';

import {
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';

import { Pagination } from '../Pagination';
import { Examples } from './Examples';

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

  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: `import { Pagination } from 'wix-ui-tpa/Pagination';`,
          }),

          divider(),

          title('Examples'),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
  examples: <Examples />,
};
