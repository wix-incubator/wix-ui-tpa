export const importExample = `import { FloatingDropdown } from 'wix-ui-tpa/FloatingDropdown';`;

export const example = `
<>
<h2>Desktop Example</h2>
<FloatingDropdown
  options={[
    {id: '1', value: 'Most recent', isSelectable: true},
    {id: '2', value: 'Most viewed', isSelectable: true},
    {id: '3', value: 'Most liked', isSelectable: true},
    { divider: true },
    {id: '4', value: 'Most comments', isSelectable: true},
    {id: '5', value: 'Most recent posts in the whole galaxy', isSelectable: true},
  ]}
  label="Sort by:"
  placeholder="Most recent"
/>
<h2>Native Example</h2>
<ExampleWithContextProps mobile={true}>
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
</ExampleWithContextProps>
</>
`;

export const maxWidth = `<div style={{ width: '100%' }}>${example}</div>`;

export const minWidth = `<div style={{ width: '0px' }}>${example}</div>`;

export const disabled = `
<>
<h2>Desktop Example</h2>
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
<h2>Native Example</h2>
<ExampleWithContextProps mobile={true}>
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
</ExampleWithContextProps>
</>`;

export const preselected = `
<>
<h2>Desktop Example</h2>
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
/>
<h2>Native Example</h2>
<ExampleWithContextProps mobile={true}>
  <FloatingDropdown
    options={[
      {id: '1', value: 'Most recent', isSelectable: true},
      {id: '2', value: 'Most viewed', isSelectable: true},
      {id: '3', value: 'Most liked', isSelectable: true},
      {id: '4', value: 'Most comments', isSelectable: true},
      {id: '5', value: 'Most recent posts in the whole galaxy', isSelectable: true},
    ]}
    label="Sort by:"
    placeholder="Something"
    value="3"
  />
</ExampleWithContextProps>
</>`;

export const ellipsis = `
<div style={{width: 200}}>
  <FloatingDropdown
    options={[
      {id: '1', value: 'Very very very very very very very very very long text', isSelectable: true},
    ]}
    label="Sort by:"
    placeholder="Very very very very very very very very very long placeholder"
    value="1"
  />
</div>
`;

export const displayBlock = `
<>
<h2>Desktop Example</h2>
<FloatingDropdown
    options={[
      {id: '1', value: 'Most recent', isSelectable: true},
      {id: '2', value: 'Most viewed', isSelectable: true},
      {id: '3', value: 'Most liked', isSelectable: true},
      {id: '4', value: 'Most comments', isSelectable: true},
      {id: '5', value: 'Most recent posts in the whole galaxy', isSelectable: true},
    ]}
    label="Sort by:"
    placeholder="Something"
    value="1"
    displayBlock
/>
<h2>Native Example</h2>
<ExampleWithContextProps mobile={true}>
  <FloatingDropdown
    options={[
      {id: '1', value: 'Most recent', isSelectable: true},
      {id: '2', value: 'Most viewed', isSelectable: true},
      {id: '3', value: 'Most liked', isSelectable: true},
      {id: '4', value: 'Most comments', isSelectable: true},
      {id: '5', value: 'Most recent posts in the whole galaxy', isSelectable: true},
    ]}
    label="Sort by:"
    placeholder="Something"
    value="1"
    displayBlock
  />
</ExampleWithContextProps>
</>`;
