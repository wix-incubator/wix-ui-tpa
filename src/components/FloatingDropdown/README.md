## FloatingDropdown
An implementation of an FloatingDropdown for TPAs

A FloatingDropdown component for use in Sorting.

### How to use

 ``` javascript
  import { FloatingDropdown } from 'wix-ui-tpa/FloatingDropdown';

  <FloatingDropdown
    options={[
      { id: '1', value: 'Most recent', isSelectable: true },
      { id: '2', value: 'Most viewed', isSelectable: true },
      { id: '3', value: 'Most liked', isSelectable: true },
      { id: '4', value: 'Most comments', isSelectable: true },
      {
        id: '5',
        value: 'Most recent posts in the whole galaxy',
        isSelectable: true,
      },
    ]}
    label="Sort by:"
    placeholder="Most recent"
  />

 ```
