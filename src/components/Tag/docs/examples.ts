export const importExample = `import { Tag } from 'wix-ui-tpa/Tag';`;

export const removable = `
<ul style={{ display: 'flex', flexDirection: 'column' }}>
  <Tag size="small" isRemovable onRemove={() => alert('onRemove handler')}>Removable Tag</Tag>
  <br />  
  <Tag size="medium" isRemovable onRemove={() => alert('onRemove handler')}>Removable Tag</Tag>
  <br />  
  <Tag size="large" isRemovable onRemove={() => alert('onRemove handler')}>Removable Tag</Tag>
</ul>
`;

export const clickable = `
<ul style={{ display: 'flex', flexDirection: 'column' }}>
  <Tag size="small" onClick={() => alert('onClick handler')}>Clickable tag</Tag>
  <br />  
  <Tag size="medium" onClick={() => alert('onClick handler')}>Clickable tag</Tag>
  <br />  
  <Tag size="large" onClick={() => alert('onClick handler')}>Clickable tag</Tag>
</ul>
`;

export const readonly = `
<ul style={{ display: 'flex', flexDirection: 'column' }}>
  <Tag size="small">Readonly tag </Tag>
  <br />  
  <Tag size="medium">Readonly tag </Tag>
  <br />  
  <Tag size="large">Readonly tag </Tag>
</ul>
`;
