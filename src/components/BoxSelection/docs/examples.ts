export const importExample = `import { BoxSelection } from 'wix-ui-tpa/BoxSelection';`;

export const uncheckedAndCheckedExample = `
() => {
  const [selectedId, setSelectedId] = React.useState('1');
  
  return (
    <BoxSelection
      name="hours"
      onChange={({ id }) => {
        return setSelectedId(id);
      }}>
      {['1', '2', '3'].map((n) => {
        return <BoxSelection.Option id={n} key={n} aria-describedby={n} checked={selectedId === n}><div>Item {n}</div></BoxSelection.Option>
      })}
    </BoxSelection>
  );
}
`;

export const smallSizeExample = `
<BoxSelection name="hours" size="small">
  <BoxSelection.Option id={'1'} key={'1'} aria-describedby={1}>
    <div>Small</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const disabledExmaple = `
<BoxSelection name="hours">
  <BoxSelection.Option id={'1'} key={'1'} aria-describedby={1} disabled> 
    <div>Disabled</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const disabledAndCheckedExmaple = `
<BoxSelection name="hours">
  <BoxSelection.Option id={'1'} key={'1'} aria-describedby={1} checked disabled> 
    <div>Checked And Disabled</div>
  </BoxSelection.Option>
</BoxSelection>
`;

export const unavailableExample = `
<BoxSelection name="hours">
  <BoxSelection.Option id={'1'} key={'1'} aria-describedby={1} unavailable>
    <div>Unavailable</div>
  </BoxSelection.Option>
</BoxSelection>
`;
