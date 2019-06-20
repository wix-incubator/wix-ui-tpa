import * as React from 'react';

import { Pagination } from '../Pagination';

export const importExample = `import { Pagination } from 'wix-ui-tpa/Pagination';`;

export const example = `
<Pagination 
  maxPagesToShow={5}
  totalPages={10}
  currentPage={1}
/>
`;

export const mobileExample = `
<TPAComponentsProvider value={{ mobile: true }}>
  <Pagination 
    maxPagesToShow={5}
    totalPages={10}
    currentPage={1}
  />
</TPAComponentsProvider>
`;
