export const importExample = `import { AddItem } from 'wix-ui-tpa/AddItem';`;

export const example = `
<>
   <div style={{ marginBottom: '12px' }}>
    <AddItem>Add Item</AddItem>
   </div>
   <div style={{ marginBottom: '12px' }}>
    <AddItem disabled>Add Item</AddItem>
   </div>
  <AddItem hasError>Add Item</AddItem>;
</>
`;

export const mobileExample = `
<ExampleWithContextProps mobile={true}>
  <AddItem>Add Item</AddItem>
</ExampleWithContextProps>
`;

export const sizesExample = `
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <div style={{ height: '130px', width: '250px', marginBottom: '12px' }}>
        <AddItem size="large">Add Item</AddItem>
      </div>
      <div style={{ height: '100px', width: '250px', marginBottom: '12px' }}>
        <AddItem size="medium">Add Item</AddItem>
      </div>
      <div style={{ height: '70px', width: '250px', marginBottom: '12px' }}>
        <AddItem size="small">Add Item</AddItem>
      </div>
      <div style={{ height: '55px', width: '250px' }}>
        <AddItem size="tiny">Add Item</AddItem>
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
