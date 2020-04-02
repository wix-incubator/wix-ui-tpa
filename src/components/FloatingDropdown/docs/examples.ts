export const importExample = `import { FloatingDropdown } from 'wix-ui-tpa/FloatingDropdown';`;

export const example = `
<FloatingDropdown
  options={[
    {id: '1', value: 'Most recent', isSelectable: true},
    {id: '2', value: 'Most viewed', isSelectable: true},
    {id: '3', value: 'Most liked', isSelectable: true},
    {id: '4', value: 'Most comments', isSelectable: true}
  ]}
  label="Sort by:"
  placeholder="Most recent"
/>
`;
