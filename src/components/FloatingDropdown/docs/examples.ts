export const importExample = `import { FloatingDropdown } from 'wix-ui-tpa/FloatingDropdown';`;

export const example = `
<FloatingDropdown
  options={[
    {id: '1', value: 'Most recent', isSelectable: true},
    {id: '2', value: 'Most viewed', isSelectable: true},
    {id: '3', value: 'Most liked', isSelectable: true},
    {id: '4', value: 'Most comments', isSelectable: true},
    {id: '5', value: 'Most recent posts in the whole galaxy', isSelectable: true},
  ]}
  label="Sort by:"
  placeholder="Most recent"
/>
`;

export const maxWidth = `<div style={{ width: '100%' }}>${example}</div>`;

export const minWidth = `<div style={{ width: '0px' }}>${example}</div>`;

export const disabled = `
<FloatingDropdown
  options={[
    {id: '1', value: 'Most recent', isSelectable: true},
    {id: '2', value: 'Most viewed', isSelectable: true},
    {id: '3', value: 'Most liked', isSelectable: true},
    {id: '4', value: 'Most comments', isSelectable: true},
    {id: '5', value: 'Most recent posts in the whole galaxy', isSelectable: true},
  ]}
  label="Sort by:"
  placeholder="Most recent"
  disabled={true}
/>
`;

export const preselected = `
<FloatingDropdown
  options={[
    {id: '1', value: 'Most recent', isSelectable: true},
    {id: '2', value: 'Most viewed', isSelectable: true},
    {id: '3', value: 'Most liked', isSelectable: true},
    {id: '4', value: 'Most comments', isSelectable: true},
    {id: '5', value: 'Most recent posts in the whole galaxy', isSelectable: true},
  ]}
  label="Sort by:"
  placeholder="Most recent"
  value="3"
/>`;
