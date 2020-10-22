export const importExample = `import { AddItem } from 'wix-ui-tpa/AddItem';`;

export const example = `
<>
   <div style={{ marginBottom: '12px' }}>
    <AddItem>Add Item</AddItem>
   </div>
   <div style={{ marginBottom: '12px' }}>
    <AddItem disabled>Add Item</AddItem>
   </div>
  <AddItem hasError>Add Item</AddItem>
</>
`;

export const sizesExample = `
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <div style={{ height: '150px', width: '250px', marginBottom: '12px' }}>
        <AddItem iconSize="xLarge">Add Item</AddItem>
      </div>
      <div style={{ height: '100px', width: '250px', marginBottom: '12px' }}>
        <AddItem iconSize="large">Add Item</AddItem>
      </div>
      <div style={{ height: '70px', width: '250px', marginBottom: '12px' }}>
        <AddItem iconSize="medium">Add Item</AddItem>
      </div>
      <div style={{ height: '36px', width: '250px' }}>
        <AddItem iconSize="small">Add Item</AddItem>
      </div>
    </div>
`;

export const alignmentExample = `
    <>
      <div style={{ marginBottom: '12px' }}>
        <AddItem alignment="center">Add Item</AddItem>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <AddItem alignment="left">Add Item</AddItem>
      </div>
      <AddItem alignment="right">Add Item</AddItem>
    </>
`;

export const directionExample = `
    <>
      <div style={{ marginBottom: '12px' }}>
        <AddItem direction="vertical">Add Item</AddItem>
      </div>
      <AddItem direction="horizontal">Add Item</AddItem>
  
    </>
`;

export const iconsExample = `
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <div style={{ height: '150px', width: '250px', marginBottom: '12px' }}>
        <AddItem iconSize="xLarge"/>
      </div>
      <div style={{ height: '100px', width: '250px', marginBottom: '12px' }}>
        <AddItem iconSize="large"/>
      </div>
      <div style={{ height: '70px', width: '250px', marginBottom: '12px' }}>
        <AddItem iconSize="medium"/>
      </div>
      <div style={{ height: '36px', width: '250px' }}>
        <AddItem iconSize="small"/>
      </div>
    </div>
`;
